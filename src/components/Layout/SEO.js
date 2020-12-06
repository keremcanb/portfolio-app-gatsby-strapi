import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDesc: description
        siteUrl
        siteTitle: title
      }
    }
  }
`;

const SEO = ({ title, description }) => {
  const {
    site: {
      siteMetadata: { siteDesc, siteTitle, siteUrl, image }
    }
  } = useStaticQuery(query);

  return (
    <Helmet htmlAttributes={{ lang: 'en' }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDesc} />
      <meta name="image" content={image} />
    </Helmet>
  );
};

export default SEO;
