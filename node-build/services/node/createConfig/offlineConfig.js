"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var options = {
    importWorkboxFrom: "local",
    globDirectory: '.',
    globPatterns: ['public/**/*'],
    globIgnores: ['public/admin/**/*', 'public/**/*.map'],
    cacheId: "gatsby-plugin-offline",
    skipWaiting: true,
    clientsClaim: true,
};
var offlineConfig = {
    resolve: "gatsby-plugin-offline",
    options: options,
};
exports.default = offlineConfig;
//# sourceMappingURL=offlineConfig.js.map