import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
import Blogs from '../components/Blogs';

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
    allStrapiBlogs: { nodes: blogs },
  },
}) => (
  <Layout>
    <section className="blog-page">
      <Blogs blogs={blogs} title="Blog" />
    </section>
  </Layout>
);

export default Blog;
