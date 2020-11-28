import React, { PropsWithChildren, useEffect } from "react"
import { navigate } from "gatsby"
import { Header, SEO } from ".."
import { View } from "./styles"
import { checkRoute } from "../../../utils/redirect"

type Props = PropsWithChildren<{
  title?: string
  shouldShowHeader?: boolean
}>

export function Layout({
  children,
  title,
  shouldShowHeader = true,
}: Props): JSX.Element {
  return (
    <>
      {title && <SEO title={title} />}
      {shouldShowHeader && <Header />}
      <View>{children}</View>
    </>
  )
}
