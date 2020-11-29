import styled from "styled-components"
import Avatar from "@micalgenus/gatsby-plugin-github-avatar"
import { Colors, Fonts } from "~/design/theme"

export const Content = styled.div`
  max-width: 1119px;
  width: 100%;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const PicWrapper = styled.div`
  width: 500px;
  height: 500px;
  align-items: center;
  justify-content: center;
  display: flex;
`

export const ProfileImage = styled(Avatar)`
  width: 400px;
  height: 400px;
  border-radius: 200px;
`

export const PageHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 40px;
`

export const PageTitle = styled.h1`
  font-family: ${Fonts.playFair};
  font-style: normal;
  font-weight: 900;
  font-size: 40px;
  color: #000000;
  margin: 0px;
`

export const PageDesc = styled.p`
  font-family: Playfair Display;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  width: 400px;
  color: #000000;
  strong {
    font-weight: 900;
  }
`

export const Separator = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 120px 0px;
`

export const Title = styled.h1`
  font-size: 35px;
  color: ${Colors.primary};
  font-family: ${Fonts.playFair};
  font-weight: 900;
  line-height: 53px;
  margin: 0px;
`

export const Description = styled.p`
  font-family: ${Fonts.playFair};
  font-weight: normal;
  font-size: 28px;
  line-height: 45px;
  color: ${Colors.primary};
`

export const ContentWrapper = styled.div`
  margin-left: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
