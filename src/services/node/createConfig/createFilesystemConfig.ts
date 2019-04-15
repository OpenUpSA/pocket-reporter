const createFilesystemConfig = root => ({
  resolve: 'gatsby-source-filesystem',
  options: {
    name: 'data',
    path: `${root}/src/data/saved/`,
  },
});

export default createFilesystemConfig;
