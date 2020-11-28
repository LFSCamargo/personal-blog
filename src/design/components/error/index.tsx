import React from "react"
import { navigate } from "gatsby"
interface Props {
  children: JSX.Element
}
export class ErrorBoundary extends React.Component<Props> {
  componentDidCatch() {
    navigate("/404")
  }
  render() {
    return <>{this.props.children}</>
  }
}
