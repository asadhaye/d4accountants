import withSerwistInit from '@serwist/next';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
        child_process: false,
        crypto: 'crypto-browserify',
        stream: false,
        os: false,
        assert: 'assert',
        events: 'events',
        'node:crypto': 'crypto-browserify',
        'node:assert': 'assert',
        'node:events': 'events',
        'node:fs': false,
        'node:fs/promises': false,
      };
    }
    return config;
  },
  serverExternalPackages: ['@xenova/transformers'],
  output: 'standalone',
};

const withSerwist = withSerwistInit({
  swSrc: 'src/app/sw.ts',
  swDest: 'public/sw.js',
  disable: process.env.NODE_ENV === 'development'
});

export default withSerwist(nextConfig);