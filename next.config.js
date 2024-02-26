
/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  images: {
    domains: ['btf08gvibdziv1ae.public.blob.vercel-storage.com'],
  },
};

const removeImports = require('next-remove-imports')();
module.exports = removeImports({});
module.exports = nextConfig;
