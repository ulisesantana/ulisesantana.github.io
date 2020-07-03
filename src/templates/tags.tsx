import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components"
import PostCard from "../components/PostCard/PostCard"
import SEO from "../components/Seo"
import { TagPostsWrapper, TagPageHeading, TagName } from "./templates.style"

const Tags = ({ pageContext, data }: any) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark

  return (
    <Layout>
      <SEO title={tag} description={`A collection of ${totalCount} post`} />

      <TagPostsWrapper>
        <TagPageHeading>
          <TagName>{tag}</TagName>
          {`A collection of ${totalCount} post`}
        </TagPageHeading>
        {edges.map(({ node, index }: any) => (
          <PostCard
            key={node.fields.slug}
            title={node.frontmatter.title}
            url={node.fields.slug}
            description={node.frontmatter.description || node.excerpt}
            date={node.frontmatter.date}
            tags={node.frontmatter.tags}
          />
        ))}
      </TagPostsWrapper>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 300)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD [<span>] MMMM [</span>]")
            title
            tags
            description
          }
        }
      }
    }
  }
`
