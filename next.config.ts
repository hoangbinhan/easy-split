import type { NextConfig } from "next";

const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  // next-pwa by default registers the service worker.
  // We can add more options if needed, but this covers the requirement.
});

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  // Ensure we don't have conflicts with other plugins if any
};

export default withPWA(nextConfig);
