/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
}

module.exports = nextConfig

// next.config.js
const withVideos = require('next-videos')

module.exports = withVideos()