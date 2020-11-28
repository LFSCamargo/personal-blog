import styled from "styled-components"
import { Colors, Fonts } from "../../theme"

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 50px;
`

export const PageName = styled.h1`
  cursor: pointer;
  font-family: ${Fonts.playFair};
  font-weight: 900;
  color: ${Colors.primary};
  font-size: 40px;
  &:hover {
    opacity: 0.5;
  }
`

export const Links = styled.p`
  cursor: pointer;
  font-family: ${Fonts.roboto};
  font-weight: bold;
  font-size: 24px;
  margin-left: 29px;
  &:hover {
    opacity: 0.5;
  }
`

export const LinksWrapper = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
`
