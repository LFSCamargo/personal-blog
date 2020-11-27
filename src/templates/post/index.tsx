import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../../design/components"
import {
  ArticleDate,
  ArticleDesc,
  ArticleImage,
  ArticleSection,
  ArticleTitle,
  Content,
} from "./styles"

type Props = {
  data: {
    markdownRemark?: {
      id: string
      excerpt: string
      html: string
      frontmatter: {
        title: string
        date: string
        description: string
        image: {
          id: string
          childImageSharp: {
            id: string
            resolutions: {
              src: string
            }
          }
        }
      }
    }
  }
}

export default function PostTemplate({ data }: Props): JSX.Element {
  const { frontmatter, html } = data.markdownRemark || {}
  console.log(data)
  return (
    <Layout title={frontmatter.title}>
      <Content>
        {frontmatter.image && (
          <ArticleImage
            src={frontmatter.image.childImageSharp.resolutions.src}
          />
        )}
        <ArticleTitle>{frontmatter.title}</ArticleTitle>
        <ArticleDesc>{frontmatter.description}</ArticleDesc>
        <ArticleDate>{frontmatter.date}</ArticleDate>
        <ArticleSection
          dangerouslySetInnerHTML={{ __html: html }}
          itemProp="articleBody"
        />
      </Content>
    </Layout>
  )
}

export const pageQuery = graphql`
  query PostBySlug($id: String!, $previousPostId: String, $nextPostId: String) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        image {
          id
          childImageSharp {
            id
            resolutions {
              src
            }
          }
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
