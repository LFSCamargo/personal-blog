import React from "react"
import { navigate } from "gatsby"
import { Links, LinksWrapper, PageName, Wrapper } from "./styles"

export function Header(): JSX.Element {
  return (
    <Wrapper>
      <PageName onClick={() => navigate("/")}>Luiz Fernando</PageName>
      <LinksWrapper>
        <Links onClick={() => navigate("/")}>home</Links>
        <Links onClick={() => navigate("/articles")}>articles</Links>
        <Links onClick={() => navigate("/contact")}>contact</Links>
      </LinksWrapper>
    </Wrapper>
  )
}
