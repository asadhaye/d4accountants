declare module "next-pwa" {
  import type { NextConfig } from "next";

  type PWAConfig = {
    dest: string;
    disable?: boolean;
    register?: boolean;
    skipWaiting?: boolean;
    runtimeCaching?: RuntimeCachingEntry[];
    buildExcludes?: string[];
    cacheStartUrl?: boolean;
    fallbacks?: {
      image?: string;
      document?: string;
    };
  };

  export function withPWA(
    config: PWAConfig,
  ): (nextConfig: NextConfig) => NextConfig;
}
