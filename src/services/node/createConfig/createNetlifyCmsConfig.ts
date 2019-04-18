const createNetlifyCmsConfig = root => ({
  resolve: 'gatsby-plugin-netlify-cms',
  options: {
    modulePath: `${root}/src/services/netlify-cms/index.js`,
    manualInit: true,
  },
});

export default createNetlifyCmsConfig;
