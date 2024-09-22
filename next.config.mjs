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

  /**
   * Include here you domain name for working auth js in production
   */
  experimental: {
    serverActions: {
      allowedOrigins: [''] //example.com
    }
  }
};

export default nextConfig;
