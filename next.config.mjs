const domainName = process.env.NEXT_PUBLIC_APP_URL;

/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
      hmrRefreshes: true
    }
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/home'
      }
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: domainName
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        pathname: domainName
      },
      {
        protocol: 'https',
        hostname: 'swiperjs.com',
        pathname: domainName
      }
    ]
  }
  /**
   * Include here you domain name for working auth js in production
   */
  // experimental: {
  //   serverActions: {
  //     allowedOrigins: [''] //example.com
  //   }
  // }
};

export default nextConfig;
