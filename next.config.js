/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  agentRules: false,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
