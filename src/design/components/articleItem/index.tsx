import React from "react"
import moment from "moment"
import {
  Wrapper,
  Title,
  Description,
  UserAndTime,
  UserInfoContainer,
  UserPic,
} from "./styles"

type Props = {
  title: string
  description: string
  userName: string
  time: string
  action: () => void
}

export function ArticleItem({
  title,
  description,
  userName,
  time,
  action,
}: Props) {
  return (
    <Wrapper onClick={action}>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <UserInfoContainer>
        <UserPic />
        <UserAndTime>
          {userName} <strong>{moment(time).format("ll")}</strong>
        </UserAndTime>
      </UserInfoContainer>
    </Wrapper>
  )
}
