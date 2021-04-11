import React from "react"
import { Wrapper } from "./styles"

export type ButtonProps = {
  text: string
  action?: () => void
  style?: React.CSSProperties
}

/** @description - It's the button component */
export function Button({ text, action = () => {}, style = {} }: ButtonProps) {
  return (
    <Wrapper style={style} onClick={action}>
      <p>{text}</p>
    </Wrapper>
  )
}
