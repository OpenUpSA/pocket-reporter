/* eslint-disable import/no-extraneous-dependencies */


const { config } = require('dotenv');


const createConfig = require('./src/node/createConfig');


const {
  HOTJAR_ID: id,
  HOTJAR_SNIPPET_VERSION: sv,
  GOOGLE_ANALYTICS_ID: trackingId,
  SENTRY_DNS: dsn,

} = config();


const passedProps = {
  id,
  sv,
  trackingId,
  dsn,
  root: __dirname,
};


module.exports = createConfig(passedProps);
