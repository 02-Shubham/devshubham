/** @type {import('next').NextConfig} */

module.exports = {
  experimental: {
    appDir: true, // Enables the App Router
  },
  optimizeFonts: false,
  images: {
    domains: ["user-images.githubusercontent.com", "cdn.hashnode.com", "github.com"],
  },
};


