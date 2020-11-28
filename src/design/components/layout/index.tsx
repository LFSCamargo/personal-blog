import React, { PropsWithChildren } from "react"
import { Header, SEO } from ".."
import { View } from "./styles"

type Props = PropsWithChildren<{
  title: string
}>

export function Layout({ children, title }: Props): JSX.Element {
  return (
    <>
      <SEO title={title} />
      <Header />
      <View>{children}</View>
    </>
  )
}
