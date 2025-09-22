/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  output: process.env.CF_PAGES ? 'export' : undefined,
  trailingSlash: process.env.CF_PAGES ? true : false,
  distDir: process.env.CF_PAGES ? 'out' : '.next',
  eslint: {
    ignoreDuringBuilds: process.env.CF_PAGES === '1',
  },
  typescript: {
    ignoreBuildErrors: process.env.CF_PAGES === '1',
  },
  webpack: config => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    config.externals.push('pino-pretty', 'lokijs', 'encoding');
    return config;
  },
};

module.exports = nextConfig
