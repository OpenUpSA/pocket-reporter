"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var manifestConfig_1 = __importDefault(require("./manifestConfig"));
var webfontsConfig_1 = __importDefault(require("./webfontsConfig"));
var createNetlifyCmsConfig_1 = __importDefault(require("./createNetlifyCmsConfig"));
var createFilesystemConfig_1 = __importDefault(require("./createFilesystemConfig"));
// import createHotjarConfig from './createHotjarConfig';
// import createAnalyticsConfig from './createAnalyticsConfig';
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
    var id = env.HOTJAR_ID, sv = env.HOTJAR_SNIPPET_VERSION, trackingId = env.GOOGLE_ANALYTICS_ID;
    return [
        manifestConfig_1.default,
        webfontsConfig_1.default,
        createFilesystemConfig_1.default(root),
        createNetlifyCmsConfig_1.default(root),
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
    plugins: __spreadArrays(withCustomConfig(env, root), noConfig),
    mapping: mapping,
}); };
exports.default = createConfig;
//# sourceMappingURL=index.js.map