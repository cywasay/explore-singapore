/** @type {import('next').NextConfig} */
const nextConfig = {
  /* React Compiler - Temporarily disabled for debugging */
  // reactCompiler: true,

  /* Enable Server Actions */
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },

  /* Optimize imports */
  modularizeImports: {
    '@/components': {
      transform: '@/components/{{member}}',
    },
  },
};

export default nextConfig;
