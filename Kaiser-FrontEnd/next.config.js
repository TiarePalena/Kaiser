/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: false,
    domains: ['kaiseringenieria.cl'],
  },
};

module.exports = nextConfig;
