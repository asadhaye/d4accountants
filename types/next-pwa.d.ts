declare module "next-pwa" {
  import { NextConfig } from "next";

  type PWAConfig = {
    dest: string;
    disable?: boolean;
    register?: boolean;
    skipWaiting?: boolean;
    runtimeCaching?: any[];
    buildExcludes?: string[];
    cacheStartUrl?: boolean;
    fallbacks?: {
      image?: string;
      document?: string;
    };
  };

  export default function withPWA(
    config: PWAConfig,
  ): (nextConfig: NextConfig) => NextConfig;
}
