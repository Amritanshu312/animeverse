/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's4.anilist.co',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'artworks.thetvdb.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'media.kitsu.io',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'gogocdn.net',
        port: '',
      },
    ],
  },

  env: {
    API_URL: process.env.API_URL,
  }


};

export default nextConfig;
