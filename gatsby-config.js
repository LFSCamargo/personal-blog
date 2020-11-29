module.exports = {
  siteMetadata: {
    title: `Luiz Fernando's Portifolio`,
    author: {
      name: `Luiz Fernando`,
      summary: `Software Engineer/Lead, based on Brazil`,
    },
    description: `My simple portifolio with projects and some articles`,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.app/`,
    social: {
      twitter: `lXSLuizinho`,
      github: `LFSCamargo`,
      instagram: `luiziscoding`,
    },
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `@micalgenus/gatsby-plugin-github-avatar`,
      options: {
        username: `LFSCamargo`, // Github username
        default: 44933973, // Github userid for default image
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "bniasprfxkbv",
        accessToken: "d6raGW3ZfoqiGceLeu2062uz96vOxuhiTenILoSZA2w",
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/fav.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-remark-images",
      options: {
        maxWidth: 800,
        showCaptions: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
