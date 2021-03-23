const { BLOG_URL } = process.env

module.exports = {
  rewrites() {
    return [
      {
        source: '/blitz',
        destination: `${BLOG_URL}/blitz`,
      },
      {
        source: '/blitz/:path*',
        destination: `${BLOG_URL}/blog/:path*`,
      },
    ]
  },
}
