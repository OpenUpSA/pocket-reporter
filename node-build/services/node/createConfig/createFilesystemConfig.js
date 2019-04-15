"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createFilesystemConfig = function (root) { return ({
    resolve: 'gatsby-source-filesystem',
    options: {
        name: 'data',
        path: root + "/src/data/saved/",
    },
}); };
exports.default = createFilesystemConfig;
//# sourceMappingURL=createFilesystemConfig.js.map