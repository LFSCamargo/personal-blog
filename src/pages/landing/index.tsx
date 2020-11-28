import React from "react"
import { Layout, Button } from "../../design/components"
import { Snake } from "../../design/svg"
import {
  Content,
  Col,
  ProfileImage,
  PageDesc,
  PageHeader,
  PageTitle,
  Separator,
  PicWrapper,
} from "./styles"

export default function Landing() {
  return (
    <Layout title="Luiz Fernando Personal Website">
      <Content>
        <PageHeader>
          <Col>
            <PageDesc>
              My name is <strong>Luiz Fernando</strong> i’m a software engineer,
              currently as a Tech Lead at Provi Capital.
            </PageDesc>
            <Button text="Read more about myself" />
          </Col>
          <PicWrapper>
            <ProfileImage />
          </PicWrapper>
        </PageHeader>
        <Separator>
          <Snake />
        </Separator>
      </Content>
    </Layout>
  )
}
