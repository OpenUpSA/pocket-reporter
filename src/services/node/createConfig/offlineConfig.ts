const options = {
  importWorkboxFrom: `local`,
  globDirectory: '.',
  globPatterns: '*',
  cacheId: `gatsby-plugin-offline`,
  skipWaiting: true,
  clientsClaim: true,
}

const offlineConfig = {
  resolve: `gatsby-plugin-offline`,
  options,
};

export default offlineConfig;
