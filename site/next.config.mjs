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
    // Static export can't use the Image Optimization API.
    unoptimized: true,
  },
  // NOTE:
  // We use a Next.js API Route for the contact form (/api/contact/submit).
  // API Routes do NOT work with `output: "export"` (pure static export),
  // and `trailingSlash: true` can also redirect API URLs.
  trailingSlash: false,
};

export default nextConfig;
