const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/post/index.tsx`)

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allContentfulBlogPost {
          edges {
            node {
              postSlug
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  console.log(result)

  /** @type {Array<{ node: { postSlug: string } }>} */
  const posts = result.data.allContentfulBlogPost.edges || []

  console.log(posts)

  // Creates pages for posts that are on contentful
  if (posts.length > 0) {
    posts.forEach(({ node }) => {
      const { postSlug } = node

      createPage({
        path: `/articles/${postSlug}`,
        component: blogPost,
        context: {
          slug: postSlug,
        },
      })
    })
  }

  const disabledSlugs = ["/articles/", "/landing/", "/contact/", "/projects/"]

  const routes = [
    {
      path: "/",
      component: path.resolve("./src/screens/landing/index.tsx"),
    },
    {
      path: "/articles",
      component: path.resolve("./src/screens/articles/index.tsx"),
    },
    {
      path: "/contact",
      component: path.resolve("./src/screens/contact/index.tsx"),
    },
    {
      path: "/404",
      component: path.resolve("./src/screens/404/index.tsx"),
    },
  ]

  routes.map(route => {
    createPage({
      path: route.path,
      component: route.component,
    })
  })
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }
  `)
}
