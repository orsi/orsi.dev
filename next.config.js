/** @type {import('next').NextConfig} */
const withExportImages = require('next-export-optimize-images')

module.exports = withExportImages({
  reactStrictMode: true,
  trailingSlash: true,
})
