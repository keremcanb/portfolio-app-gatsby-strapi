import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Jobs from '../components/Jobs';
import Projects from '../components/Projects';
import Blogs from '../components/Blogs';

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

    allStrapiBlogs(sort: { fields: date, order: DESC }, limit: 3) {
      nodes {
        category
        content
        date(formatString: "MMM Do, YYYY")
        slug
        title
        desc
        id
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default ({
  data: {
    allStrapiProjects: { nodes: projects },
    allStrapiBlogs: { nodes: blogs }
  }
}) => (
  <Layout>
    <Hero />
    <Services />
    <Jobs />
    <Projects projects={projects} title="Featured Projects" showLink />
    <Blogs blogs={blogs} title="Latest Articles" showLink />
  </Layout>
);
