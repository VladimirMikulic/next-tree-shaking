const withBundleAnalyzer = require('next-bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

// Try enabling terser for minification as opposed to swc
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /.*tsx/i,
      sideEffects: false
    });

    return config;
  }
};

module.exports = withBundleAnalyzer(nextConfig);
