# Cloudflare Pages Deployment

Easy Split is configured as a static Next.js export for Cloudflare Pages. The site builds to plain HTML, CSS, JavaScript, and static assets in `out/`, so requests do not run through an OpenNext Worker.

## Local Build

```powershell
npm run build
```

This runs `next build` with `output: "export"` and writes the static site to `out/`.

## Local Preview

```powershell
npm run preview
```

This builds the static export and serves `out/` with `wrangler pages dev`.

## Deploy

```powershell
npm run deploy
```

This builds the static export and uploads `out/` to the Cloudflare Pages project named `easy-split`.

In the Cloudflare dashboard, use these Pages build settings if deploying from Git:

- Framework preset: `Next.js (Static HTML Export)`
- Build command: `npm run build`
- Build output directory: `out`

## Static Export Notes

- Locale pages are generated as static routes such as `/en/`, `/vi/`, and `/pt-BR/`.
- The root `/` page performs a small browser-side locale redirect for users; search engines should crawl the explicit localized URLs from the sitemap.
- Security headers live in `public/_headers` because `next.config.ts headers()` is not available in static export mode.
- Image optimization is disabled with `images.unoptimized` because there is no Next.js image optimizer server in static hosting.
