/*
 * @Author: liuwenjun05 liuwenjun05@meituan.com
 * @Date: 2023-11-29 20:44:04
 * @LastEditors: liuwenjun05
 * @Description: file content
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  images: {
    domains: ['btf08gvibdziv1ae.public.blob.vercel-storage.com', 's11.ax1x.com'],
  },
};

const removeImports = require('next-remove-imports')();
module.exports = removeImports({});
module.exports = nextConfig;
