import React, { useMemo } from "react"
import { navigate } from "gatsby"
import { Links, LinksWrapper, PageName, Wrapper } from "./styles"

/** @description - Header component that will be displayed */
export function Header(): JSX.Element {
  const pageTitle = useMemo(() => {
    if (location.pathname === "/") return "Luiz Fernando"
    if (location.pathname === "/articles") return "Articles"
    if (location.pathname === "/contact") return "Get in Touch"
    return "Luiz Fernando"
  }, [location.pathname])

  return (
    <Wrapper>
      <PageName onClick={() => navigate("/")}>{pageTitle}</PageName>
      <LinksWrapper>
        <Links onClick={() => navigate("/")}>home</Links>
        <Links onClick={() => navigate("/articles")}>articles</Links>
        <Links onClick={() => navigate("/contact")}>contact</Links>
      </LinksWrapper>
    </Wrapper>
  )
}
