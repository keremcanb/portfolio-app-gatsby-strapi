import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import Layout from '../components/Layout/Layout';
import Title from '../components/Layout/Title';
import SEO from '../components/Layout/SEO';

export const query = graphql`
  {
    about: allStrapiAbout {
      nodes {
        stack {
          id
          title
        }
        info
        title
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

const About = ({
  data: {
    about: { nodes }
  }
}) => {
  const { title, stack, info, image } = nodes[0];

  return (
    <Layout>
      <SEO title="About" description="About Keremcan Buyuktaskin" />

      <section className="about-page">
        <div className="section-center about-center">
          <Image fluid={image.childImageSharp.fluid} className="about-img" />

          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>

            <div className="about-stack">
              {stack.map((item) => (
                <span key={item.id}>{item.title}</span>
              ))}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  );
};

export default About;
