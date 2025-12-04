/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for hosting on any static server
  // output: 'export',

  // Image optimization settings
  images: {
    // For static export, use unoptimized
    // unoptimized: true,

    // Or for Vercel/Node hosting, define remote patterns if needed
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
  },

  // Compiler options for production
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig
