const createHotjarConfig = ({ id, sv }) => {
  if (!id || !sv) {
    return [];
  }

  return [
    {
      resolve: 'gatsby-plugin-hotjar',
      options: {
        id,
        sv,
      },
    },
  ];
};

export default createHotjarConfig;
