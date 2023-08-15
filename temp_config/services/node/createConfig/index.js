"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var manifestConfig_1 = __importDefault(require("./manifestConfig"));
var webfontsConfig_1 = __importDefault(require("./webfontsConfig"));
var createNetlifyCmsConfig_1 = __importDefault(require("./createNetlifyCmsConfig"));
var createFilesystemConfig_1 = __importDefault(require("./createFilesystemConfig"));
/**
 * A list of all Gatsby plugins used as is, without any configuration.
 */
var noConfig = [
    'gatsby-plugin-offline',
    'gatsby-plugin-i18n',
    'gatsby-plugin-material-ui',
    'gatsby-plugin-netlify',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
    'gatsby-transformer-json',
];
/**
 * A function that creates a list of all Gatsby plugins with custom configuration applied via functions. Also removes plugins (via `filter` method) that do not have required configuration passed from ENV variable (for example, a Google Analytics ID is only passed in production)
 */
var withCustomConfig = function (env, root) {
    var _a = env.parsed, id = _a.HOTJAR_ID, sv = _a.HOTJAR_SNIPPET_VERSION, trackingId = _a.GOOGLE_ANALYTICS_ID;
    console.log({ trackingId: trackingId });
    return [
        manifestConfig_1.default,
        webfontsConfig_1.default,
        createFilesystemConfig_1.default(root),
        createNetlifyCmsConfig_1.default(root),
        {
            resolve: "gatsby-plugin-google-gtag",
            options: {
                // You can add multiple tracking ids and a pageview event will be fired for all of them.
                trackingIds: [
                    trackingId,
                ],
                // This object is used for configuration specific to this plugin
                pluginConfig: {
                    // Puts tracking script in the head instead of the body
                    head: true,
                },
            },
        },
    ];
};
/**
 * Creates mapping between properties stored inside files from folders saved in `/src/data/saved`.
 */
var mapping = {
    'FoldersJson.questions.content': 'QuestionsJson.title',
    'FoldersJson.resources.content': 'ResourcesJson.title',
};
/**
 * Returns entire list of plugins used by Gatsby with custom configuration applied as needed.
 */
var createConfig = function (env, root) { return ({
    siteMetadata: {
        title: 'Pocket Reporter',
        siteUrl: 'https://app.pocketreporter.co.za',
    },
    plugins: withCustomConfig(env, root).concat(noConfig),
    mapping: mapping,
}); };
exports.default = createConfig;
//# sourceMappingURL=index.js.map