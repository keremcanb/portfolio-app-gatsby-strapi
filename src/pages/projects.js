import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Projects from '../components/Projects';

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        github
        description
        title
        url
        id
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`;

const ProjectsPage = ({
  data: {
    allStrapiProjects: { nodes: projects },
  },
}) => (
  <Layout>
    <section className="projects-page">
      <Projects projects={projects} title="All Projects" />
    </section>
  </Layout>
);

export default ProjectsPage;
