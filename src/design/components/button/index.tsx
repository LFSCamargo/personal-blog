import React from "react"
import { Wrapper } from "./styles"

export type ButtonProps = {
  text: string
  action?: () => void
  style?: React.CSSProperties
}

export function Button({ text, action = () => {}, style = {} }: ButtonProps) {
  return (
    <Wrapper style={style} onClick={action}>
      <p>{text}</p>
    </Wrapper>
  )
}
