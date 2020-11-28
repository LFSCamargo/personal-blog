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
            <PageTitle>Contact</PageTitle>
            <PageDesc>
              Get in touch with me about new projects, job opportunities and
              also where you can send me a feedback.
            </PageDesc>
            <Button text="Talk with me" />
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
