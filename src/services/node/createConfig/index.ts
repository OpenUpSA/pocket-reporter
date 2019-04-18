import { Tenv, Troot } from './schema';

import manifestConfig from './manifestConfig';
import webfontsConfig from './webfontsConfig';
import createNetlifyCmsConfig from './createNetlifyCmsConfig';
import createFilesystemConfig from './createFilesystemConfig';
// import createHotjarConfig from './createHotjarConfig';
// import createAnalyticsConfig from './createAnalyticsConfig';

/**
 * A list of all Gatsby plugins used as is, without any configuration.
 */
const noConfig = [
  'gatsby-plugin-i18n',
  'gatsby-plugin-material-ui',
  'gatsby-plugin-netlify',
  'gatsby-plugin-offline',
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-sitemap',
  'gatsby-plugin-styled-components',
  'gatsby-plugin-typescript',
  'gatsby-transformer-json',
];

/**
 * A function that creates a list of all Gatsby plugins with custom configuration applied via functions. Also removes plugins (via `filter` method) that do not have required configuration passed from ENV variable (for example, a Google Analytics ID is only passed in production)
 */
const withCustomConfig = (env: Tenv, root: Troot) => {
  const { HOTJAR_ID: id, HOTJAR_SNIPPET_VERSION: sv, GOOGLE_ANALYTICS_ID: trackingId } = env;

  return [
    manifestConfig,
    webfontsConfig,
    createFilesystemConfig(root),
    createNetlifyCmsConfig(root),
    // !!id && !!sv && createAnalyticsConfig(id, sv),
    // !!trackingId && createHotjarConfig(trackingId),
  ];
};

/**
 * Creates mapping between properties stored inside files from folders saved in `/src/data/saved`.
 */
const mapping = {
  'FoldersJson.questions.content': 'QuestionsJson.title',
  'FoldersJson.resources.content': 'ResourcesJson.title',
};

/**
 * Returns entire list of plugins used by Gatsby with custom configuration applied as needed.
 */
const createConfig = (env, root) => ({
  siteMetadata: {
    title: 'Pocket Reporter',
    siteUrl: 'https://app.pocketreporter.co.za',
  },
  plugins: [...noConfig, ...withCustomConfig(env, root)],
  mapping,
});

export default createConfig;
