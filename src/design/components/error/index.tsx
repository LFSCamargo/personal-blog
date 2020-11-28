import { navigate } from "gatsby"
import React, { useEffect } from "react"
import { checkRoute } from "../../../utils/redirect"

interface Props {
  children: JSX.Element
}

export function ErrorBoundary({ children }: Props) {
  const { isRouteValid } = checkRoute()

  useEffect(() => {
    if (!isRouteValid) {
      navigate("/404")
    }
  }, [isRouteValid])

  return children
}
