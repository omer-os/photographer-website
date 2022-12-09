/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "media.graphassets.com", "cdn.sanity.io"],
  },
};

module.exports = nextConfig;
