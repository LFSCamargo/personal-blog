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
  const { allMarkdownRemark } = useStaticQuery<QueryRes>(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            id
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
            }
            fields {
              slug
            }
            excerpt
          }
        }
      }
    }
  `)

  const renderArticles = useMemo(
    () =>
      allMarkdownRemark.edges.map(
        ({
          node: {
            frontmatter: { date, title, description },
            fields: { slug },
          },
        }) => {
          return (
            <ArticleItem
              action={() => navigate(`/articles${slug}`)}
              title={title}
              description={description}
              time={date}
              userName="Luiz Fernando"
            />
          )
        }
      ),
    [allMarkdownRemark]
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
