import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout/Layout';
import SEO from '../components/Layout/SEO';

const Error = () => (
  <Layout>
    <SEO title="404 Error" description="404 Page Not Found" />

    <main className="error-page">
      <div className="error-container">
        <h1>Oops it's a dead end...</h1>

        <Link to="/" className="btn">
          Back Home
        </Link>
      </div>
    </main>
  </Layout>
);

export default Error;
