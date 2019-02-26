/* eslint-disable import/no-extraneous-dependencies */


const { config } = require('dotenv');
const starterpack = require('./starterpack.json');
const filesystemConfig = require('./src/tooling/gatsby-config/filesystemConfig');
const netlifyCmsConfig = require('./src/tooling/gatsby-config/netlifyCmsConfig');
const buildManifestConfig = require('./src/tooling/gatsby-config/buildManifestConfig');
const createHotjarConfig = require('./src/tooling/gatsby-config/createHotjarConfig');
const createAnalyticsConfig = require('./src/tooling/gatsby-config/createAnalyticsConfig');
const createSentryConfig = require('./src/tooling/gatsby-config/createSentryConfig');


const {
  name: nameValue,
  background: backgroundValue,
  theme: themeValue,
} = starterpack;


const {
  HOTJAR_ID,
  GOOGLE_ANALYTICS_ID,
  SENTRY_DNS,
  HOTJAR_SNIPPET_VERSION,
} = config();


const mapping = {
  'FoldersJson.questions': 'QuestionsJson.title',
  'FoldersJson.resources': 'ResourcesJson.title',
};


module.exports = {
  siteMetadata: {
    title: nameValue,
    siteUrl: 'https://pocketreporter.netlify.com',
  },
  plugins: [
    filesystemConfig,
    netlifyCmsConfig,
    ...(buildManifestConfig({
      name: nameValue,
      theme: themeValue,
      background: backgroundValue,
    })),
    ...(createHotjarConfig({ id: HOTJAR_ID, sv: HOTJAR_SNIPPET_VERSION })),
    ...(createAnalyticsConfig({ trackingId: GOOGLE_ANALYTICS_ID })),
    ...(createSentryConfig({ dsn: SENTRY_DNS })),
    'gatsby-transformer-json',
    '@wapps/gatsby-plugin-material-ui',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-netlify',
  ],
  mapping,
};
