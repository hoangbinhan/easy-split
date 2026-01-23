import type { NextConfig } from "next";

const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
});

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Ensure we don't have conflicts with other plugins if any
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self';",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://tagmanager.google.com https://pagead2.googlesyndication.com https://partner.googleadservices.com https://tpc.googlesyndication.com https://www.google-analytics.com https://ssl.google-analytics.com https://static.cloudflareinsights.com https://*.adtrafficquality.google https://*.googlesyndication.com https://www.google.com https://*.google.com;",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://www.googletagmanager.com https://tagmanager.google.com;",
              "font-src 'self' https://fonts.gstatic.com;",
              "img-src 'self' blob: data: https://*.google-analytics.com https://*.analytics.google.com https://*.googlesyndication.com https://pagead2.googlesyndication.com https://flagcdn.com https://*.adtrafficquality.google https://www.googletagmanager.com https://fonts.gstatic.com https://www.gstatic.com https://www.google.com https://*.google.com https://*.g.doubleclick.net;",
              "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://analytics.google.com https://*.analytics.google.com https://pagead2.googlesyndication.com https://api.web3forms.com https://*.adtrafficquality.google https://csi.gstatic.com https://www.googletagmanager.com https://stats.g.doubleclick.net https://*.g.doubleclick.net https://*.google.com;",
              "frame-src 'self' https://googleads.g.doubleclick.net https://tpc.googlesyndication.com https://www.google.com https://www.googletagmanager.com https://tagmanager.google.com https://*.adtrafficquality.google;",
            ]
              .join(" ")
              .replace(/\s{2,}/g, " ")
              .trim(),
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default withPWA(nextConfig);
