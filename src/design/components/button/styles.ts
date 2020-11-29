import styled from "styled-components"
import { Colors, Fonts } from "~/design/theme"

export const Wrapper = styled.div`
  cursor: pointer;
  padding: 20px 30px;
  background-color: ${Colors.primary};
  display: flex;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 0.5;
  }
  p {
    margin: 0px;
    font-family: ${Fonts.roboto};
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    color: ${Colors.secondary};
  }
`
