import React from "react"
import { graphql } from "gatsby"
import { Layout } from "~/design/components"
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
    contentfulBlogPost: {
      contentful_id: string
      postSlug: string
      title: string
      featuredImage: {
        file: {
          url: string
        }
      }
      publishedDate: string
      postBody: {
        childMarkdownRemark: {
          html: string
        }
      }
      description: string
    }
  }
}

export default function PostTemplate({ data }: Props): JSX.Element {
  const { description, featuredImage, publishedDate, postBody, title } =
    data.contentfulBlogPost || {}

  return (
    <Layout title={title}>
      <Content>
        {featuredImage.file && <ArticleImage src={featuredImage.file.url} />}
        <ArticleTitle>{title}</ArticleTitle>
        <ArticleDesc>{description}</ArticleDesc>
        <ArticleDate>{publishedDate}</ArticleDate>
        <ArticleSection
          dangerouslySetInnerHTML={{
            __html: postBody.childMarkdownRemark.html,
          }}
          itemProp="articleBody"
        />
      </Content>
    </Layout>
  )
}

export const query = graphql`
  query PostBySlug($slug: String!) {
    contentfulBlogPost(postSlug: { eq: $slug }) {
      contentful_id
      postSlug
      title
      featuredImage {
        file {
          url
        }
      }
      publishedDate(formatString: "DD dddd, MMM YYYY")
      postBody {
        childMarkdownRemark {
          html
        }
      }
      description
    }
  }
`
