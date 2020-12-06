import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
import Blogs from '../components/Blogs';
import SEO from '../components/Layout/SEO';

export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        category
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

const Blog = ({
  data: {
    allStrapiBlogs: { nodes: blogs }
  }
}) => (
  <Layout>
    <SEO title="Blog" description="Blog Posts" />

    <section className="blog-page">
      <Blogs blogs={blogs} title="Blog" />
    </section>
  </Layout>
);

export default Blog;
