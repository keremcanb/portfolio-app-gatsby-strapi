import React from 'react';
import { Link } from 'gatsby';
import Title from './Layout/Title';
import Blog from './Blog';

const Blogs = ({ blogs, title, showLink }) => (
  <section className="section">
    <Title title={title} />

    <div className="section-center blogs-center">
      {blogs.map((blog) => (
        <Blog key={blog.id} {...blog} />
      ))}
    </div>

    {showLink && (
      <Link to="/blog" className="btn center-btn">
        Blog
      </Link>
    )}
  </section>
);

export default Blogs;
