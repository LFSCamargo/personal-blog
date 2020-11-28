import { graphql, useStaticQuery } from "gatsby"
import { QueryRes } from "./typings"

const defaultRoutes = ["/", "/articles", "/projects", "/contact", "/404"]

interface CheckRouteReturn {
  isRouteValid: boolean
}

export function checkRoute(): CheckRouteReturn {
  const { allMarkdownRemark } = useStaticQuery<QueryRes>(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const validRoutes = [
    ...allMarkdownRemark.edges.map(e => `/articles${e.node.fields.slug}`),
    ...defaultRoutes,
  ]

  const size = location.pathname.split("/").filter(e => e).length

  if (size === 1 || location.pathname === "/") {
    return {
      isRouteValid: validRoutes.includes(location.pathname),
    }
  }

  return {
    isRouteValid: validRoutes.includes(`${location.pathname}/`),
  }
}
