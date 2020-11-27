import styled from "styled-components"
import { Fonts } from "../../design/theme"

export const Content = styled.div`
  max-width: 1000px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-top: 50px;
`

export const ArticleImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 500px;
  border-radius: 10px;
`

export const ArticleTitle = styled.h1`
  font-size: 30px;
  font-family: ${Fonts.playFair};
  font-weight: 900;
`

export const ArticleDesc = styled.p`
  font-family: ${Fonts.playFair};
  font-weight: normal;
  font-size: 18px;
  margin: 0px;
  color: #000000;
`

export const ArticleDate = styled.p`
  font-family: ${Fonts.roboto};
  font-weight: normal;
  font-size: 18px;
  color: #000000;
`

export const ArticleSection = styled.section`
  font-family: ${Fonts.playFair};
  text-align: start;
  code {
    font-size: 16px;
  }
  img,
  span {
    width: 100%;
  }
  p {
    font-size: 18px;
  }
  h1 {
    font-size: 25px;
  }
  h2 {
    font-size: 20px;
  }
`

export const Separator = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`
