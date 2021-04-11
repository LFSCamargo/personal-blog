import React from "react"
import { navigate } from "gatsby"

interface Props {
  children: JSX.Element
}

/** @description - The class component that will redirect to the 404 screen when a crash happen */
export class ErrorBoundary extends React.Component<Props> {
  componentDidCatch() {
    navigate("/404")
  }
  render() {
    return <>{this.props.children}</>
  }
}
