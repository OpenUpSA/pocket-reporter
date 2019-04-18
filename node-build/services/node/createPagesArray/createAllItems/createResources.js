"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var change_case_1 = require("change-case");
var createResources = function (isoKey) { return function (object) {
    var _a, _b, _c;
    if (!object || !object.content) {
        return null;
    }
    // @ts-ignore
    var _d = object.content || {}, title = _d.title, body = _d.body;
    if (isoKey === 'eng') {
        return _a = {},
            _a[isoKey + "/resources/" + change_case_1.kebab(title) + "/index.html"] = {
                type: 'resource',
                fallback: false,
                isoKey: isoKey,
                title: title,
                body: body,
            },
            _a;
    }
    if (!object[isoKey] || !object[isoKey].title) {
        return _b = {},
            _b[isoKey + "/resources/" + change_case_1.kebab(title) + "/index.html"] = {
                type: 'resource',
                fallback: true,
                isoKey: isoKey,
                title: title,
                body: body,
            },
            _b;
    }
    return _c = {},
        _c[isoKey + "/resources/" + change_case_1.kebab(object[isoKey].title) + "/index.html"] = {
            type: 'resource',
            fallback: false,
            isoKey: isoKey,
            title: object[isoKey].title,
            body: object[isoKey].body,
        },
        _c;
}; };
exports.default = createResources;
//# sourceMappingURL=createResources.js.map