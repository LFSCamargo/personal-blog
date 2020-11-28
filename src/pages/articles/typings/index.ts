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
  frontmatter: Frontmatter
  fields: Fields
  excerpt: string
}

export interface Frontmatter {
  date: string
  title: string
  description?: string
}

export interface Fields {
  slug: string
}
