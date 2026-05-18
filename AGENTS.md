# Repository Guidelines

## Project Structure & Module Organization

This is a Next.js 15 application deployed through OpenNext for Cloudflare. Application code lives in `src/`. App Router routes are under `src/app`, with localized pages in `src/app/[lang]`. Shared React components live in `src/components`, including mockup UI under `src/components/mockups`. Translation and sitemap helpers are in `src/lib`. Static assets, PWA files, icons, and blog media are in `public/`.

Key configuration files are `next.config.ts`, `open-next.config.ts`, `wrangler.jsonc`, `eslint.config.mjs`, and `tsconfig.json`.

## Build, Test, and Development Commands

- `npm run dev`: starts the local Next.js development server with Turbopack.
- `npm run build`: creates a production Next.js build.
- `npm run start`: serves the built app locally with Next.js.
- `npm run lint`: runs the configured Next.js/TypeScript ESLint rules.
- `npm run preview`: builds and previews the app in the Cloudflare runtime.
- `npm run deploy`: builds and deploys to Cloudflare.
- `npm run cf-typegen`: regenerates Cloudflare environment typings.

Use `npm install` to restore dependencies from `package-lock.json`.

## Coding Style & Naming Conventions

Use TypeScript and React function components. Keep route components named `page.tsx`, route layouts named `layout.tsx`, and server routes named `route.ts`. Prefer the `@/*` path alias for imports from `src`. Use two-space indentation in TSX/CSS files and keep strict TypeScript compatibility enabled.

Components use PascalCase, hooks and helpers use camelCase, and route folders use kebab-case where they appear in URLs, such as `split-image` or `cookie-policy`. Keep user-facing localized content in the existing `src/lib/i18n*.ts` files instead of duplicating copy in components.

## Testing Guidelines

No dedicated test framework is currently configured. Validate changes with `npm run lint` and `npm run build`. For UI changes, run `npm run dev` and manually check the affected localized route, including mobile layouts and image-processing flows. If adding tests later, colocate them near the feature or use a clear `tests/` directory and document the new command here.

## Commit & Pull Request Guidelines

Recent commits use short numbered subjects such as `101: Update adsense` and `98: Update CSP`. Follow that concise style when continuing the current history. Pull requests should include a short description, affected routes or tools, validation commands run, and screenshots for visual changes. Call out Cloudflare, PWA, or CSP changes explicitly.

## Security & Configuration Tips

Do not commit secrets. Keep Cloudflare configuration in `wrangler.jsonc` and generated environment typings in `cloudflare-env.d.ts`. Review `public/_headers`, `next.config.ts`, and CSP-related changes carefully because they affect production behavior.
