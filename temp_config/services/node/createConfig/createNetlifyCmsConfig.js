"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createNetlifyCmsConfig = function (root) { return ({
    resolve: 'gatsby-plugin-netlify-cms',
    options: {
        modulePath: root + "/src/services/netlify-cms/index.js",
        manualInit: true,
    },
}); };
exports.default = createNetlifyCmsConfig;
//# sourceMappingURL=createNetlifyCmsConfig.js.map