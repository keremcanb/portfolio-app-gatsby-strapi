import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Jobs from '../components/Jobs';
import Projects from '../components/Projects';
// import Blogs from '../components/Blogs';

export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
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

export default ({
  data: {
    allStrapiProjects: { nodes: projects },
  },
}) => (
  <Layout>
    <Hero />
    <Services />
    <Jobs />
    <Projects projects={projects} title="Featured Projects" showLink />
    {/* <Blogs /> */}
  </Layout>
);
