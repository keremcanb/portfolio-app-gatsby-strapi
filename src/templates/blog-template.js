import React from 'react';
import { graphql, Link } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import Layout from '../components/Layout/Layout';
import SEO from '../components/Layout/SEO';

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
      title
      desc
    }
  }
`;

const ComponentName = ({
  data: {
    blog: { content, title, desc }
  }
}) => (
  <Layout>
    <SEO title={title} description={desc} />

    <section className="blog-template">
      <div className="section-center">
        <article className="blog-content">
          <ReactMarkdown source={content} />
        </article>

        <Link to="/blog" className="btn center-btn">
          Blog
        </Link>
      </div>
    </section>
  </Layout>
);

export default ComponentName;
