/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true
  },
  // Add basePath for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
  // Add assetPrefix for GitHub Pages
  assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '',
  // Ensure shader-park-core is handled correctly
  webpack: (config, { isServer }) => {
    // Handle shader-park-core
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
      crypto: false,
    };

    return config;
  }
};

module.exports = nextConfig;