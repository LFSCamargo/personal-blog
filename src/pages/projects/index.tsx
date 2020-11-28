import React from "react"
import { Layout, Button } from "../../design/components"
import { Snake } from "../../design/svg"
import {
  Content,
  Col,
  ContactAnimation,
  PageDesc,
  PageHeader,
  PageTitle,
  Separator,
} from "./styles"

export default function Contact() {
  return (
    <Layout title="Contact Me">
      <Content>
        <PageHeader>
          <Col>
            <PageTitle>What i've done</PageTitle>
            <PageDesc>
              Some projects that i've done on github that's worth sharing all my
              most famous repos
            </PageDesc>
            <Button text="Let's take a look" />
          </Col>
          <ContactAnimation />
        </PageHeader>
        <Separator>
          <Snake />
        </Separator>
      </Content>
    </Layout>
  )
}
