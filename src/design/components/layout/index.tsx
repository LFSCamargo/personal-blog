import React, { PropsWithChildren } from "react"
import { Header, SEO } from ".."
import { View } from "./styles"

type Props = PropsWithChildren<{
  title?: string
  shouldShowHeader?: boolean
}>

/** @description - the layout component contains the helmet and the header3 */
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
