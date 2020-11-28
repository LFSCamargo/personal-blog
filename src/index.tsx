import React from "react"
import { Layout } from "./design/components"

interface Props {
  element: React.ReactNode
}

export default function RootComponent({ element }: Props): JSX.Element {
  return <Layout shouldShowHeader={false}>{element}</Layout>
}
