import React from 'react';
import Image from 'gatsby-image';
import { Link, graphql, useStaticQuery } from 'gatsby';
import SocialLinks from '../constants/socialLinks';
import starry from '../assets/starry.svg';

const query = graphql`
  {
    file(relativePath: { eq: "hero-img.png" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid }
    }
  } = useStaticQuery(query);

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline" />
            <h1>Keremcan</h1>
            <h2>Büyüktaşkın</h2>
            <h4>Full Stack Developer</h4>

            {/* <Link to="/contact" className="btn">
              Contact Me
            </Link> */}

            {/* <SocialLinks /> */}
          </div>
        </article>
        {/* <img src={starry} alt="starry" className="hero-img" /> */}

        <Image fluid={fluid} className="hero-img" />
      </div>
    </header>
  );
};

export default Hero;
