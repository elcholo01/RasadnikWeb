/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  async redirects() {
    return [
      {
        source: '/sadnice/tulipanovo-drvo',
        destination: '/sadnice/liriodendron',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
