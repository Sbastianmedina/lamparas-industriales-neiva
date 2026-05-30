/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  reactStrictMode: false,  // ← Cambié de true a false
  swcMinify: true,
  compress: true,
  onDemandEntries: {       // ← NUEVO
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 5,
  },
};

module.exports = nextConfig;