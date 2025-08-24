/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['instagram.com'],
    unoptimized: true,
  },
  experimental: {
    outputFileTracingExcludes: {
      '*': [
        'node_modules/@swc/core-linux-x64-gnu',
        'node_modules/@swc/core-linux-x64-musl', 
        'node_modules/@esbuild/linux-x64',
      ],
    },
  },
  // For static export (REMOVES server features)
  // output: 'export',
  // trailingSlash: true,
  // images: {
  //   unoptimized: true
  // }
}

module.exports = nextConfig 