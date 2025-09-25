import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* existing config */
  devIndicators: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // ✅ needed for GitHub Pages (no Next.js Image Optimization)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },

  /* 👇 Added for static export */
  output: 'export', // replaces next export
  basePath: '',     // keep empty for username.github.io root site
  assetPrefix: '',  // ensures assets load correctly
}

export default nextConfig
