/** @type {import('next').NextConfig} */

const nextConfig = {
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
        hostname: 'images.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com'
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
