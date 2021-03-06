import React from 'react';
import Layout from '../components/Layout/Layout';
import SEO from '../components/Layout/SEO';

const contact = () => (
  <Layout>
    <SEO title="Contact" description="Contact Form" />

    <section className="contact-page">
      <article className="contact-form">
        <h3>Get in Touch</h3>
        <form action="https://formspree.io/f/xnqogqny" method="POST">
          <div className="form-group">
            <input type="text" name="name" placeholder="name" className="form-control" />

            <input type="email" placeholder="email" name="email" className="form-control" />

            <textarea name="message" rows="5" placeholder="message" className="form-control" />
          </div>

          <button type="submit" className="submit-btn btn">
            Submit
          </button>
        </form>
      </article>
    </section>
  </Layout>
);

export default contact;
