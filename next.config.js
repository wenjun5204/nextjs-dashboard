
/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'cdn.liuwenjun.fun',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

const removeImports = require('next-remove-imports')();
module.exports = removeImports({});
module.exports = nextConfig;
