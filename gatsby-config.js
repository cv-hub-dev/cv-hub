/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `new`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
      {
        resolve: 'gatsby-plugin-sass',
        options: {
          additionalData: `@import "./src/styles/general.scss";`,
        }
      },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    }
  ]
};
