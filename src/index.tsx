import React from "react"
import { ErrorBoundary } from "./design/components"

interface Props {
  element: JSX.Element
}

export default function RootComponent({ element }: Props): JSX.Element {
  return <ErrorBoundary>{element}</ErrorBoundary>
}
