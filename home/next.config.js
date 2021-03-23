const { BLOG_URL } = process.env

module.exports = {
  rewrites() {
    return [
      {
        source: '/blitz',
        destination: `${BLOG_URL}`,
      },
      {
        source: '/blitz/:path*',
        destination: `${BLOG_URL}/:path*`,
      },
    ]
  },
}
