module.exports = {
  pathPrefix: '/capacitor-talk',
    // pathPrefix: '/print',

  plugins: [
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-theme-mdx-deck',
      options: {
        basePath: ''
      }
    }
  ]
};
