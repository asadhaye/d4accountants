// next.config.mjs
/** @type {import('next').NextConfig} */
const config = {
  webpack: (config, { isServer }) => {
    // Prevent server-side native module loading attempts
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
        child_process: false,
        crypto: false,
        stream: false,
        os: false,
      };
    }

    // Remove node-loader configuration as it's not needed for browser-only usage
    config.module.rules = config.module.rules.filter(rule => 
      rule.use !== 'node-loader'
    );

    return config;
  },
  serverExternalPackages: ['@xenova/transformers'],
  output: 'standalone',
};

export default config;
