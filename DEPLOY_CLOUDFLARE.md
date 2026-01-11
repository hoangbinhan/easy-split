# Cloudflare Deployment Plan (Free Tier)

This guide details how to deploy your "Easy Split" application to Cloudflare for free. We utilize **Cloudflare Workers** (via OpenNext) which provides a generous free tier (100,000 requests/day).

## Prerequisites

1.  **Cloudflare Account**: [Sign up here](https://dash.cloudflare.com/sign-up).
2.  **Node.js**: You already have this.
3.  **Wrangler CLI**: The official Cloudflare CLI tool.

## Deployment Steps

### 1. Login to Cloudflare

In your terminal, run:

```powershell
npx wrangler login
```

This will open your browser. Click "Allow" to authorize the CLI.

### 2. Verify Configuration

Your project is already configured for Cloudflare:

- `wrangler.jsonc`: Main configuration file.
- `open-next.config.ts`: Adapter configuration.
- `package.json`: Contains the `deploy` script.

### 3. Build & Deploy

Run the following command to build your application and deploy it to Cloudflare:

```powershell
npm run deploy
```

**What this does:**

1.  Builds your Next.js app (`next build`).
2.  Converts it to a Cloudflare Worker compatible format (`opennextjs-cloudflare build`).
3.  Uploads the worker and assets to Cloudflare (`opennextjs-cloudflare deploy`).

### 4. Custom Domain (easysplit.click)

After deployment, you will get a `*.workers.dev` URL (e.g., `tiktok-tools.your-name.workers.dev`). To use your custom domain `easysplit.click`:

1.  Go to your **Cloudflare Dashboard**.
2.  Navigate to **Workers & Pages**.
3.  Select your new worker (likely named `tiktok-tools`).
4.  Go to **Triggers** > **Custom Domains**.
5.  Click **Add Custom Domain**.
6.  Enter `easysplit.click` (ensure this domain is added to your Cloudflare account DNS).
7.  Cloudflare will handle the SSL/TLS certificates automatically.

## Zero Cost Strategy

- **Images**: We use standard `<img>` tags for flags to avoid Cloudflare Image Resizing costs.
- **Caching**: The app uses client-side processing (Canvas), reducing server load.
- **Worker Limits**: The free tier includes 100k requests/day. If you exceed this, the site will stop serving until the next day unless you upgrade ($5/mo).

## Troubleshooting

- **PWA Issues**: If the service worker doesn't update, clear your browser cache/storage.
- **Deployment Errors**: If `npm run deploy` fails, usually check the error log. Common issues are large bundle sizes (not an issue here) or login expiration (run `npx wrangler login` again).
