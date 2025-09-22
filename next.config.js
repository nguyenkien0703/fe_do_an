/** @type {import('next').NextConfig} */
// require('dotenv').config();

const nextConfig = {

  // output: 'export',
  trailingSlash: true,
  // images: {
  //   unoptimized: true
  // },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: process.env.NODE_ENV === 'development' 
              ? 'no-cache, no-store, must-revalidate' 
              : 'public, max-age=3600, s-maxage=3600'
          }
        ]
      }
    ]
  },
  reactStrictMode: true,
  // experimental: {
  //   runtime: 'edge',
  // },
  webpack: (config, { dev, isServer }) => {
    config.resolve.fallback = {
      fs: false,
      net: false,
      tls: false,
      crypto: false,
      stream: false,
      url: false,
      zlib: false,
      http: false,
      https: false,
      assert: false,
      os: false,
      path: false,
      process: false
    }
    config.externals.push('pino-pretty', 'lokijs', 'encoding')

    config.module.rules.push(
      {
        test: /\.d\.ts$/,
        loader: 'ignore-loader'
      },
      {
        test: /\.map$/,
        loader: 'ignore-loader'
      },
      {
        test: /\.d\.ts\.map$/,
        loader: 'ignore-loader'
      }
    )

    config.module.rules.push({
      test: /node_modules\/@metamask\/sdk\/.*\.(d\.ts|map)$/,
      loader: 'ignore-loader'
    })

    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          maxInitialRequests: 25,
          minSize: 20000,
          maxSize: 24400000, // 24.4MB - slightly under the 25MB limit
          cacheGroups: {
            default: false,
            vendors: false,
            framework: {
              chunks: 'all',
              name: 'framework',
              test: /[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
              priority: 40,
              enforce: true
            },
            lib: {
              test: /[\\/]node_modules[\\/]/,
              chunks: 'all',
              name(module) {
                const match = module.context?.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)
                if (!match) return 'vendor'
                const packageName = match[1]
                return `npm.${packageName.replace('@', '')}`
              },
              priority: 30
            },
            commons: {
              name: 'commons',
              minChunks: 2,
              priority: 20
            }
          }
        }
      }
    }

    return config
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com'
      },
      {
        protocol: 'https',
        hostname: 'cdn.gems.fun'
      },
      {
        protocol: 'https',
        hostname: 'staging-api.gems.fun'
      },
      {
        protocol: 'https',
        hostname: 'storage.herewallet.app'
      }
    ]
  }
}

module.exports = nextConfig
