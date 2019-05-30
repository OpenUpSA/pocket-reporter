"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var formatResourcesPreview = function (resources) {
    return resources
        .map(function (object) {
        if (!object) {
            return null;
        }
        var url = Object.keys(object)[0];
        return {
            click: url,
            title: object[url].title,
        };
    })
        .filter(function (notNull) { return !!notNull; });
};
exports.default = formatResourcesPreview;
//# sourceMappingURL=formatResourcesPreview.js.map