import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Enable static optimization
  trailingSlash: false,

  // Improve SEO and performance
  compress: true,

  // Enable experimental features for better SEO
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-accordion'],
  },

  // Image optimization for better performance
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Security headers for better SEO ranking
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
    ];
  },

  // Redirects for SEO (if needed)
  async redirects() {
    return [
      // Add any necessary redirects here
    ];
  },
};

export default nextConfig;
