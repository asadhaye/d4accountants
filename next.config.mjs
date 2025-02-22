// @ts-check

import withPWA from '@ducanh2912/next-pwa';

/** @type {import('next').NextConfig} */
const config = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
        child_process: false
      };
    }
    return config;
  },
  output: 'standalone'
};

const pwaConfig = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development'
});

// @ts-ignore - Type mismatch between Next.js versions
export default pwaConfig(config);