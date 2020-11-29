import { graphql, useStaticQuery, navigate } from "gatsby"
import React, { useMemo } from "react"
import { Layout, Button, ArticleItem } from "../../design/components"
import { Snake } from "../../design/svg"
import { Separator } from "../contact/styles"
import {
  Content,
  Col,
  ArticlesAnimation,
  PageDesc,
  PageHeader,
  PageTitle,
} from "./styles"
import { QueryRes } from "./typings"

export default function Articles() {
  const { allContentfulBlogPost } = useStaticQuery<QueryRes>(graphql`
    query ArticlesQuery {
      allContentfulBlogPost {
        edges {
          node {
            contentful_id
            postSlug
            title
            publishedDate(formatString: "DD dddd, MMM YYYY")
            description
          }
        }
      }
    }
  `)

  const renderArticles = useMemo(
    () =>
      allContentfulBlogPost.edges.map(
        ({
          node: { contentful_id, title, description, publishedDate, postSlug },
        }) => {
          return (
            <ArticleItem
              key={contentful_id}
              action={() => navigate(`/articles/${postSlug}`)}
              title={title}
              description={description}
              time={publishedDate}
              userName="Luiz Fernando"
            />
          )
        }
      ),
    [allContentfulBlogPost]
  )

  return (
    <Layout title="Articles">
      <Content>
        <PageHeader>
          <Col>
            <PageTitle>Articles</PageTitle>
            <PageDesc>
              Welcome to my blog here is where i share my content and express my
              self about the stuff that i learned and where i share my
              experiences
            </PageDesc>
            <Button text="Lets Read" />
          </Col>
          <ArticlesAnimation />
        </PageHeader>
        <Separator>
          <Snake />
        </Separator>
        {renderArticles}
      </Content>
    </Layout>
  )
}
