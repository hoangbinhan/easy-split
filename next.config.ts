import type { NextConfig } from "next";

const withPWA = require("next-pwa");

const pwaConfig = {
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
};

type WebpackConfig = Parameters<NonNullable<NextConfig["webpack"]>>[0];
type WebpackOptions = Parameters<NonNullable<NextConfig["webpack"]>>[1];

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

const pwaWrappedConfig = withPWA({
  ...nextConfig,
  pwa: pwaConfig,
}) as NextConfig & {
  pwa?: typeof pwaConfig;
  webpack?: (config: WebpackConfig, options: WebpackOptions) => WebpackConfig;
};

const pwaWebpack = pwaWrappedConfig.webpack;
delete pwaWrappedConfig.pwa;

const config: NextConfig = {
  ...pwaWrappedConfig,
  webpack(config, options) {
    const configWithPWA = options.config as typeof options.config & {
      pwa?: typeof pwaConfig;
    };
    const previousPWA = configWithPWA.pwa;

    configWithPWA.pwa = pwaConfig;

    try {
      return pwaWebpack?.(config, options) ?? config;
    } finally {
      configWithPWA.pwa = previousPWA;
    }
  },
};

export default config;
