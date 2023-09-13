/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
}

module.exports = nextConfig

// Add any other routes you want to export
module.exports = {
    exportPathMap: function () {
      return {
        '/': { page: '/' }, 
      };
    },
  };
  
// next.config.js
const withVideos = require('next-videos')

module.exports = withVideos()