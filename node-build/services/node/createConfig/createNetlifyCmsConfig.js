"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createNetlifyCmsConfig = function (root) { return ({
    resolve: 'gatsby-plugin-netlify-cms',
    options: {
        modulePath: root + "/node-build/services/node/initialiseNetlifyCms/index.js",
        manualInit: true,
    },
}); };
exports.default = createNetlifyCmsConfig;
//# sourceMappingURL=createNetlifyCmsConfig.js.map