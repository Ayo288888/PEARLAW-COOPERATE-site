/** @type {import('next').NextConfig} */
import { withPayload } from '@payloadcms/next/withPayload'

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: [
      '@payloadcms/next',
      '@payloadcms/ui',
      '@payloadcms/richtext-lexical',
      'lucide-react',
    ],
  },
}

export default withPayload(nextConfig)
