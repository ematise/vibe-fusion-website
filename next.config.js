/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['instagram.com'],
  },
  // For static export (REMOVES server features)
  // output: 'export',
  // trailingSlash: true,
  // images: {
  //   unoptimized: true
  // }
}

module.exports = nextConfig 