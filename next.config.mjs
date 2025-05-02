/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000', 'localhost:3001', '192.168.1.20:3000', '192.168.1.20:3001'],
    },
  },
  serverExternalPackages: ['sharp'],
  allowedDevOrigins: ['localhost:3000', 'localhost:3001', '192.168.1.20:3000', '192.168.1.20:3001'],
  output: 'export',
}

export default nextConfig
