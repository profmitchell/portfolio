/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  images: {
    unoptimized: true
  },
  // Skip API routes in static export
  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true,
  webpack: (config, { dev, isServer }) => {
    // Disable webpack cache in development
    if (dev) {
      config.cache = false;
    }

    // Handle module fallbacks
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
      crypto: false,
    };

    // Optimize for static export
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
          },
        },
      };
    }

    return config;
  },
  // Disable cache during build
  experimental: {
    turbotrace: {
      enabled: false,
    },
  },
};

module.exports = nextConfig;