export interface QueryRes {
  allContentfulBlogPost: {
    edges: Array<{
      node: {
        contentful_id: string
        postSlug: string
        title: string
        publishedDate: string
        description: string
      }
    }>
  }
}
