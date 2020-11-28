import styled from "styled-components"
import { Colors, Fonts } from "../../theme"

export const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
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

export const UserAndTime = styled.p`
  font-family: ${Fonts.roboto};
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
  color: ${Colors.primary};
  strong {
    color: ${Colors.tertiary};
  }
`

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const UserPic = styled.img.attrs({
  src:
    "https://avatars2.githubusercontent.com/u/44933973?s=400&u=0da30182c49bfcddf1bc0bb3d77ba86c390606a1&v=4",
})`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-right: 20px;
`
