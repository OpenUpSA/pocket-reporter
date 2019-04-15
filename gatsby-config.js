// Documentation for the Gatsby Config API (used by this file) at https://www.gatsbyjs.org/docs/gatsby-config/

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */

const { config } = require('dotenv');
const createGatsbyConfig = require('./node-build/services/node/createConfig').default;

const env = config();

/**
 * Runs `createGatsbyConfig()`, a function that accepts all ENV variables and the project root path,
 * and configures all Gatsby plugins based on the values passed.
 */
const gatsbyConfig = createGatsbyConfig(env, __dirname);

module.exports = gatsbyConfig;
