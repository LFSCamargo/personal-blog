import React from "react"
import { Layout, Button } from "~/design/components"
import { Snake } from "~/design/svg"
import {
  Content,
  Col,
  ProfileImage,
  PageDesc,
  PageHeader,
  Separator,
  PicWrapper,
  Title,
  Description,
  ContentWrapper,
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
        <ContentWrapper>
          <Title>About myself</Title>
          <Description>
            I’m a tech lead based on Brazil, working at Provi.
            <br />
            <br />
            I’ve always been interested in technology, i’ve always played games
            like League of Legends, Tibia and Counter Strike, and when i was 14
            years old i’ve got into programming developing some Android Rom’s
            for my smartphone, i’ve got into some C and MakeFiles always copy
            and pasting stuff from other repos and also from some tutorials,
            after some time i started learning PHP and i started developing some
            freelance websites, and in parallel i was into a internship job at
            Penske Logistics coding some PHP, C# and VBA, after 2 years and a
            half i’ve got my first job as a real coder at Entria there i’ve
            learned how to code in Javascript, React, React-Native, Node.js,
            GraphQL and Relay Modern, and since them i’ve built my career on top
            of Javascript and i got into some great companies like Shawee,
            Popstand, Platform Builders and Urbit City.
            <br />
            <br />
            And now i’m facing a pretty big challenge that is leading people and
            help them improoving them career inside the tech market.
          </Description>
        </ContentWrapper>
      </Content>
    </Layout>
  )
}
