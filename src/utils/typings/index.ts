export interface QueryRes {
  allMarkdownRemark: AllMarkdownRemark
}

export interface AllMarkdownRemark {
  edges: Edge[]
}

export interface Edge {
  node: Node
}

export interface Node {
  id: string
  fields: Fields
}

export interface Fields {
  slug: string
}
