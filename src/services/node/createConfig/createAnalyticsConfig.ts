const createAnalyticsConfig = trackingId => {
  if (!trackingId) {
    return [];
  }

  return [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId,
      },
    },
  ];
};

export default createAnalyticsConfig;
