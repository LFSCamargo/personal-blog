import React, { useCallback } from "react"
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
  ContentWrapper,
  Icon,
  GithubIcon,
  IconsRow,
  ContentDesc,
} from "./styles"

export default function Contact() {
  const openUrl = useCallback((url: string) => {
    window.open(url)
  }, [])

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
        <ContentWrapper>
          <PageTitle>Social Networks</PageTitle>
          <ContentDesc>
            Here are some of my social networks so you can get in touch with me,
            or if you prefer you can send me a email
          </ContentDesc>
          <IconsRow>
            <Icon
              onClick={() =>
                openUrl("https://www.linkedin.com/in/luizfernando-lxspandora/")
              }
              src="https://i.imgur.com/Ft69JqO.png"
            />
            <Icon
              onClick={() => openUrl("https://twitter.com/lXSLuizinho")}
              src="https://i.imgur.com/6tuStiG.png"
            />
            <Icon
              onClick={() => openUrl("https://instagram.com/luiziscoding")}
              src="https://i.imgur.com/t7gwvxd.png"
            />
            <GithubIcon
              onClick={() => openUrl("https://github.com/LFSCamargo")}
              src="https://i.imgur.com/P6YN6MI.png"
            />
          </IconsRow>
        </ContentWrapper>
      </Content>
    </Layout>
  )
}
