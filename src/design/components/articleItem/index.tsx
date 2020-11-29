import React from "react"
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
  action?: () => void
  isStatic?: boolean
}

export function ArticleItem({
  title,
  description,
  userName,
  time,
  action = () => {},
  isStatic = false,
}: Props) {
  return (
    <Wrapper static={isStatic} onClick={action}>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <UserInfoContainer>
        <UserPic />
        <UserAndTime>
          {userName} <strong>{time}</strong>
        </UserAndTime>
      </UserInfoContainer>
    </Wrapper>
  )
}
