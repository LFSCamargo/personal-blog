import React from "react"
import { Wrapper } from "./styles"

export type ButtonProps = {
  text: string
  action?: () => void
}

export function Button({ text, action = () => {} }: ButtonProps) {
  return (
    <Wrapper onClick={action}>
      <p>{text}</p>
    </Wrapper>
  )
}
