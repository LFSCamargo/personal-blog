import styled from "styled-components"
import Lottie, { LottieProps } from "react-lottie"
import { ContactUs } from "../../animations"
import { Fonts } from "../../design/theme"

export const Content = styled.div`
  max-width: 1119px;
  width: 100%;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ContactAnimation = styled(Lottie).attrs({
  width: 500,
  height: 500,
  options: {
    loop: true,
    autoplay: true,
    animationData: ContactUs,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  },
} as LottieProps)`
  margin-right: -50px;
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
  font-size: 30px;
  width: 400px;
  color: #000000;
`

export const Separator = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 120px 0px;
`
