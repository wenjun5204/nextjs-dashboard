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
    domains: ['s11.ax1x.com', 's11.ax1x.com'],
  },
};

module.exports = nextConfig;
