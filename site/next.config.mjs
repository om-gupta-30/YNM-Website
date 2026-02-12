/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Output as standalone for Docker deployment
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
      },
    ],
    // Disable Next.js Image Optimization for Cloud Run standalone deployment
    // This prevents /_next/image API 404 errors in standalone/Docker mode
    unoptimized: true,
    dangerouslyAllowSVG: true,
    // Custom loader to bypass optimization API entirely
    loader: 'custom',
    loaderFile: './lib/imageLoader.js',
  },
  // Enable compression for better performance
  compress: true,
  
  // Experimental performance features
  experimental: {
    // Optimize CSS loading
    optimizeCss: false, // Keep false to avoid crashing
    // Optimize package imports for smaller bundles (reduces unused JS)
    optimizePackageImports: ['framer-motion', 'lucide-react', '@heroicons/react'],
  },
  
  // Efficient cache lifetimes for static assets (PageSpeed: "Use efficient cache lifetimes")
  async headers() {
    return [
      // HTML pages - Browser cache enabled for SEO, CDN cache disabled for instant deploys
      {
        source: '/:path((?!_next|assets|fonts|api).*)',
        headers: [
          // max-age=300 (5 min browser cache for SEO), s-maxage=0 (no CDN cache for instant deploy)
          { key: 'Cache-Control', value: 'public, max-age=300, s-maxage=0, stale-while-revalidate=60' },
          { key: 'Link', value: '</assets/hero-image.webp>; rel=preload; as=image; type=image/webp; fetchpriority=high' },
        ],
      },
      // Static assets - long cache
      {
        source: '/assets/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, s-maxage=31536000, immutable' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
        ],
      },
      {
        source: '/fonts/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, s-maxage=31536000, immutable' },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, s-maxage=31536000, immutable' },
        ],
      },
      {
        source: '/_next/image/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, s-maxage=31536000, immutable' },
        ],
      },
    ];
  },
  trailingSlash: false,
  
  // Performance optimizations
  poweredByHeader: false,
  generateEtags: true,
  
  // Webpack optimization
  webpack: (config, { isServer }) => {
    // Optimize bundle splitting
    if (!isServer) {
      config.optimization.splitChunks = {
        ...config.optimization.splitChunks,
        cacheGroups: {
          ...config.optimization.splitChunks?.cacheGroups,
          // Split large vendor chunks
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 10,
          },
        },
      };
    }
    return config;
  },
};

export default nextConfig;
