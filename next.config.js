/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN: process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN,
  }
}

module.exports = nextConfig
