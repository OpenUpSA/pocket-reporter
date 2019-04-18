const createNetlifyCmsConfig = root => ({
  resolve: 'gatsby-plugin-netlify-cms',
  options: {
    modulePath: `${root}/node-build/services/node/initialiseNetlifyCms/index.js`,
    manualInit: true,
  },
});

export default createNetlifyCmsConfig;
