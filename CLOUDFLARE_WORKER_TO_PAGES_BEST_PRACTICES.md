# Cloudflare Worker to Pages Migration Best Practices

Tài liệu này ghi lại các bước đã dùng để chuyển Easy Split từ Cloudflare Worker sang Cloudflare Pages, cùng những điểm cần lưu ý khi deploy Next.js static export.

## Mục Tiêu

Easy Split hiện là Next.js static site, build ra thư mục `out/` bằng `output: "export"`. Vì vậy Cloudflare Pages là hướng deploy đơn giản hơn Worker/OpenNext:

- Không cần Worker runtime cho request thông thường.
- Không cần `.open-next/worker.js` cho bản static export.
- Static assets, HTML, CSS, JavaScript được phục vụ trực tiếp từ Cloudflare Pages.
- Custom domain được gắn trực tiếp vào Pages project.

## Các Bước Đã Làm

### 1. Build Next.js theo static export

Trong `next.config.ts`, giữ cấu hình:

```ts
output: "export",
trailingSlash: true,
images: {
  unoptimized: true,
},
```

Kết quả build nằm trong:

```text
out/
```

### 2. Sửa build cho Next.js 16 và next-pwa

Next.js 16 bật Turbopack mặc định khi build. `next-pwa` hiện vẫn inject webpack config, nên build cần chạy rõ bằng webpack:

```json
"build": "next build --webpack"
```

Nếu Cloudflare chạy `next build` trực tiếp, log sẽ báo lỗi:

```text
This build is using Turbopack, with a `webpack` config and no `turbopack` config.
```

Cách sửa trên Cloudflare Pages:

```text
Build command: npm run build
Build output directory: out
```

Không dùng build command mặc định `next build`.

### 3. Bỏ cấu hình không còn hợp lệ trong Next.js 16

Next.js 16 không còn hỗ trợ:

```ts
eslint: {
  ignoreDuringBuilds: true,
}
```

Vì vậy phải bỏ `eslint` khỏi `next.config.ts`.

Script lint cũng đổi từ:

```json
"lint": "next lint"
```

sang:

```json
"lint": "eslint ."
```

### 4. Deploy Pages project

Deploy bằng Wrangler:

```powershell
npm run build
npx wrangler pages deploy out --project-name easy-split
```

Hoặc dùng script:

```powershell
npm run deploy
```

Cloudflare Pages settings khi deploy từ Git:

```text
Framework preset: Next.js (Static HTML Export)
Build command: npm run build
Build output directory: out
Root directory: để trống nếu repo root là easy-split
```

### 5. Chạy local theo Pages runtime

Sau khi build:

```powershell
npx wrangler pages dev out
```

Hoặc:

```powershell
npm run preview
```

Mặc định chạy ở:

```text
http://localhost:8788
```

### 6. Chuyển custom domain từ Worker sang Pages

Trong Cloudflare Dashboard:

1. Vào `Workers & Pages`.
2. Mở Worker cũ đang giữ domain.
3. Vào `Settings > Domains & Routes`.
4. Xóa route hoặc custom domain cũ, ví dụ:

```text
easy-split.com/*
www.easy-split.com/*
easy-split.com
www.easy-split.com
```

Sau đó gắn domain vào Pages:

1. Vào `Workers & Pages`.
2. Mở Pages project `easy-split`.
3. Vào `Custom domains`.
4. Chọn `Set up a domain`.
5. Thêm domain cần dùng, ví dụ:

```text
easy-split.com
www.easy-split.com
```

Nếu domain nằm trong cùng Cloudflare account, Cloudflare thường tự tạo DNS record phù hợp. Nếu cần thêm thủ công cho subdomain:

```text
Type: CNAME
Name: www
Target: easy-split.pages.dev
Proxy: Proxied
```

Với apex domain như `easy-split.com`, nên add domain qua Pages `Custom domains` trước để Cloudflare xử lý CNAME flattening đúng cách.

## Điều Cần Lưu Ý

### Worker route có thể chặn Pages

Nếu domain vẫn còn route trong Worker, request có thể tiếp tục đi vào Worker cũ thay vì Pages. Khi thấy deploy Pages đã thành công nhưng domain vẫn hiển thị bản cũ, kiểm tra ngay:

```text
Worker > Settings > Domains & Routes
```

Xóa route trùng hostname/path trước khi debug DNS sâu hơn.

### Cloudflare build phải chạy đúng script

Cloudflare Pages có thể tự dùng preset và chạy `next build`. Với repo này, điều đó sai vì `next-pwa` cần webpack mode.

Luôn set:

```text
Build command: npm run build
```

và xác nhận `package.json` đã có:

```json
"build": "next build --webpack"
```

Sau khi sửa build command hoặc package scripts, nếu Cloudflare vẫn dùng behavior cũ, chạy:

```text
Clear build cache and retry deployment
```

### Static export không chạy server logic

Vì `output: "export"` tạo static files, không dùng các tính năng cần Next.js server runtime:

- API routes.
- Server actions cho mutation runtime.
- Dynamic server rendering.
- Next image optimizer server.
- `headers()` trong `next.config.ts`.

Security headers nên đặt ở:

```text
public/_headers
```

Images cần:

```ts
images: {
  unoptimized: true,
}
```

### `wrangler.jsonc` hiện không đại diện cho Pages static flow

Repo vẫn có `wrangler.jsonc` kiểu OpenNext Worker:

```text
main: .open-next/worker.js
assets.directory: .open-next/assets
```

Nhưng static Pages deploy đang dùng:

```text
out/
```

Vì vậy không dùng `wrangler deploy` cho flow hiện tại. Dùng:

```powershell
wrangler pages deploy out --project-name easy-split
```

Nếu sau này chuyển lại sang SSR/OpenNext Worker, cần cập nhật lại kiến trúc deploy và không trộn hai flow.

### Chọn canonical domain rõ ràng

Nên add cả root và `www` nếu cần:

```text
easy-split.com
www.easy-split.com
```

Sau đó chọn một domain chính và redirect domain còn lại về domain chính bằng Cloudflare Redirect Rules. Điều này giúp tránh duplicate content SEO và giảm nhầm lẫn khi debug.

## Những Điều Đáng Học Hỏi

- Log build của Cloudflare cho biết chính xác command/preset đang chạy. Nếu log nói `Next.js 16.2.6 (Turbopack)`, nghĩa là build chưa dùng `--webpack`.
- Dependency update lớn như Next.js 16 có thể làm lộ lỗi từ plugin cũ, kể cả khi code app không đổi.
- Với static site, Pages đơn giản và phù hợp hơn Worker. Worker chỉ nên dùng khi cần runtime logic ở edge.
- Đừng chỉ cấu hình DNS record thủ công. Với Cloudflare Pages, nên add domain trong Pages `Custom domains` để Cloudflare biết hostname thuộc project nào.
- Khi migrate domain, thứ tự đúng là: deploy Pages thành công, gỡ Worker route cũ, add custom domain vào Pages, rồi kiểm tra DNS/redirect.
- Nên ghi lại build command trong repo docs để tránh Cloudflare dashboard và local scripts bị lệch nhau.

## Checklist Nhanh Cho Lần Sau

```text
[ ] npm run build chạy được local
[ ] out/ được tạo sau build
[ ] Cloudflare Pages build command là npm run build
[ ] Cloudflare Pages output directory là out
[ ] Worker cũ không còn route/custom domain trùng hostname
[ ] Pages project đã add custom domain
[ ] DNS record trỏ về Pages project, không còn placeholder Worker cũ
[ ] Root/www redirect được cấu hình rõ ràng
[ ] Mở production domain thấy đúng bản Pages mới
```
