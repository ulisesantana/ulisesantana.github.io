import React from "react"
import { graphql } from "gatsby"
import { SpanishLayout } from "../components"
import { SEO } from "../components"
import { TagName, TagPageHeading, TagPostsWrapper } from "./templates.style"
import PostCard from "../components/PostCard/PostCard"

const Tags = ({ pageContext, data }: any) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  return (
    <SpanishLayout>
      <SEO
        title={tag}
        description={`Un lista de ${totalCount} entradas sobre ${tag}`}
      />

      <TagPostsWrapper>
        <TagPageHeading>
          <TagName>{tag}</TagName>
          {`${totalCount} entrada${totalCount === 1 ? "" : "s"} sobre ${tag}`}
        </TagPageHeading>
        {edges.map(({ node }: any) => (
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
    </SpanishLayout>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String, $draftDisabledList: [Boolean!]!) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { 
        frontmatter: { 
            tags: { in: [$tag] },
            draft: { nin: $draftDisabledList } 
        } 
      }
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
