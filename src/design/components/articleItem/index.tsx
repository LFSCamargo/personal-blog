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

/** @description - It's the item that will me mapped on the Article Item */
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
