/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  target: 'serverless',
};

module.exports = nextConfig;
