import React from "react"
import { Layout } from "../../design/components"
import { Wrapper, ErrorAnimation } from "./styles"

export default function Error404(): JSX.Element {
  return (
    <Layout shouldShowHeader={false}>
      <Wrapper>
        <ErrorAnimation />
      </Wrapper>
    </Layout>
  )
}
