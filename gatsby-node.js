const path = require('path');

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const res = await graphql(`
    {
      blogs: allStrapiBlogs {
        nodes {
          slug
        }
      }
    }
  `);

  res.data.blogs.nodes.forEach(({ slug }) => {
    createPage({
      path: `/blogs/${slug}`,
      component: path.resolve(`src/templates/blog-template.js`),
      context: {
        slug,
      },
    });
  });
};
