import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from "../containers/HomePage"
import {graphql, useStaticQuery} from "gatsby";

const AboutPage: React.FunctionComponent = () => {
  const { site } = useStaticQuery(
    graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    author
                }
            }
        }
    `
  );

  return (
    <Layout>
      <SEO
        description={site.siteMetadata.description}
        title="Ulises Santana | Full Stack Developer"
      />

      <Home />
    </Layout>
  )
};

export default AboutPage
