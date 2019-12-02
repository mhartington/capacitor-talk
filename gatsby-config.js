module.exports = {
  // pathPrefix: '/ionic-cross-platform',
  pathPrefix: '/',
  plugins: [
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-theme-mdx-deck',
      options: {
        basePath: '',
      },
    },
  ],
}
