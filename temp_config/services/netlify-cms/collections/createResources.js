"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var languages_1 = require("./languages");
var langaugeInstance = function (required) {
    if (required === void 0) { required = true; }
    return [
        {
            name: 'title',
            label: 'Title',
            widget: 'string',
            required: required,
        },
        {
            name: 'body',
            label: 'Content',
            widget: 'markdown',
            required: required,
        },
    ];
};
var buildTranslation = function (_a) {
    var isoKey = _a.isoKey, nativeName = _a.nativeName;
    return ({
        label: nativeName,
        name: isoKey,
        widget: 'object',
        fields: langaugeInstance(false),
    });
};
var removeEnglish = function (_a) {
    var isoKey = _a.isoKey;
    return isoKey !== 'eng';
};
var translations = function () { return languages_1.languages.filter(removeEnglish).map(buildTranslation); };
var createResource = function () { return ({
    name: 'resources',
    label: '📚 Resources',
    folder: 'src/data/saved/resources/',
    extension: 'json',
    create: true,
    fields: __spreadArrays([
        {
            name: 'type',
            label: 'Type',
            widget: 'hidden',
            default: 'resources',
        }
    ], langaugeInstance(true), translations()),
}); };
exports.default = createResource;
//# sourceMappingURL=createResources.js.map