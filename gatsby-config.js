/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: 'Acceleratorapp',
    description: 'task',
    author: '@kareemwilson',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/static`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Acceleratorapp',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/featureIcon2.png', // This path is relative to the root of the site.
      },
    },
  ],
};
