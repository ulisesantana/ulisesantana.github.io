import { graphql, useStaticQuery } from "gatsby"
import { JobData, MilestoneData } from "@components";

export interface CV {
    education: JobData[]
    jobs: JobData[]
    about: string
    milestones: MilestoneData[]
}

export function useCV(): CV{
    const {
        allDataYaml: {
          nodes: [cv],
        },
      } = useStaticQuery(graphql`
        query {
          allDataYaml {
            nodes {
                jobs {
                  description
                  location
                  from
                  employer
                  skills
                  position
                  to
                }
                about
                milestones {
                  title
                  when
                  youtube
                  twitter
                  location
                  description
                }
                education {
                  description
                  employer
                  from
                  location
                  position
                  skills
                  to
                }
              }
          }
        }
      `)

      return cv;
}