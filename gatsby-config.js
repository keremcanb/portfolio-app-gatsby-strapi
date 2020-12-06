module.exports = {
  siteMetadata: {
    title: 'Keremcan Buyuktaskin Portfolio',
    description: 'My portfolio built with Gatsby.',
    author: 'Keremcan Buyuktaskin',
    siteUrl: 'https://keremcanb.netlify.app/'
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`
      }
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000,
        contentTypes: [`jobs`, `projects`, `blogs`],
        singleTypes: [`about`]
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto\:400,700`, `Open Sans`],
        display: 'swap'
      }
    }
  ]
};
