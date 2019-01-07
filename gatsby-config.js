// eslint-disable-next-line import/no-extraneous-dependencies
const { config } = require('dotenv');
const starterpack = require('./starterpack.json');


const isHexColor = value => /^#[0-9a-fA-F]{6}/.test(value);


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


const siteMetadata = {
  siteUrl: `https://www.pocket-reporter.netlify.com`,
}


const buildManifestConfig = ({ name, theme, background }) => {
  if (!name || !background || !theme) {
    return [];
  }

  if (!isHexColor(theme)) {
    throw new Error('"theme" is not a hex color in "starterpack.json"');
  }

  if (!isHexColor(background)) {
    throw new Error('"background" is not a hex color in "starterpack.json"');
  }

  return [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name,
        icon: 'src/assets/meta/logo.png',
        short_name: name,
        start_url: '/',
        background_color: background,
        theme_color: theme,
        display: 'minimal-ui',
      },
    },
  ];
};


const materialUiConfig = {
  resolve: '@wapps/gatsby-plugin-material-ui',
};


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


const createAnalyticsConfig = (trackingId) => {
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


const createSentryConfig = ({ dsn }) => {
  if (!dsn) {
    return [];
  }

  return [
    {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn,
      },
    },
  ];
};


const filesystemConfig = {
  resolve: `gatsby-source-filesystem`,
  options: {
    name: `data`,
    path: `${__dirname}/src/data/`,
  },
}


const netlifyCmsConfig = {
  resolve: 'gatsby-plugin-netlify-cms',
  options: {
    modulePath: `${__dirname}/src/cms/index.js`,
  },
}


module.exports = {
  siteMetadata: {
    title: nameValue,
    siteUrl: 'https://pocketreporter.netlify.com',
  },
  plugins: [
    materialUiConfig,
    filesystemConfig,
    netlifyCmsConfig,
    ...(buildManifestConfig({ name: nameValue, theme: themeValue, background: backgroundValue })),
    ...(createHotjarConfig({ id: HOTJAR_ID, sv: HOTJAR_SNIPPET_VERSION })),
    ...(createAnalyticsConfig({ trackingId: GOOGLE_ANALYTICS_ID })),
    ...(createSentryConfig({ dsn: SENTRY_DNS })),
    'gatsby-transformer-remark',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-netlify',
  ],
};
