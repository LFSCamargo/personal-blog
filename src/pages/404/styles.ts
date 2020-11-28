import styled from "styled-components"
import Lottie, { LottieProps } from "react-lottie"
import { Error404 } from "../../animations"

export const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`

export const ErrorAnimation = styled(Lottie).attrs({
  width: 800,
  height: 800,
  options: {
    loop: true,
    autoplay: true,
    animationData: Error404,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  },
} as LottieProps)`
  margin-right: -50px;
`
