import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
import Projects from '../components/Projects';
import SEO from '../components/Layout/SEO';

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
    allStrapiProjects: { nodes: projects }
  }
}) => (
  <Layout>
    <SEO title="Projects" description="My development projects" />

    <section className="projects-page">
      <Projects projects={projects} title="All Projects" />
    </section>
  </Layout>
);

export default ProjectsPage;
