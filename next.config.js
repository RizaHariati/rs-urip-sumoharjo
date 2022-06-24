/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
  nextConfig,
  images: {
    domains: [
      "randomuser.me",
      "openweathermap.org",
      "osm.org",
      "res.cloudinary.com",
      // { path: "res.cloudinary.com", loader: "imgix" },
    ],
  },
};
