const nextConfig = {
  poweredByHeader: false, // Add this line to remove "X-Powered-By: Next.js" header
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
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
      {
        protocol: 'https',
        hostname: 'axiom.trade',
        port: '',
        pathname: '/**',
      }
    ],
  },
  async rewrites() {
    return [
      {
        source: '/sol-icon.svg',
        destination: 'https://axiom.trade/images/sol-fill.svg',
      },
      {
        source: '/bnb-icon.svg',
        destination: 'https://axiom.trade/images/bnb-fill.svg',
      },
    ]
  }
}

module.exports = nextConfig