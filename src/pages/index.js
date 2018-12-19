import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import './index.styl'
import AboutMe from '../components/AboutMe'

import { Layout } from '../components/Layout'

class webIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title
    const siteDescription = data.site.siteMetadata.description

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        menu={data.site.siteMetadata.menu}
      >
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <AboutMe/>
      </Layout>
    )
  }
}

export default webIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        menu {
          section
          path
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
