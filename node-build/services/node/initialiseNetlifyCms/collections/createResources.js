"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var schema_1 = require("../../../../data/hardcoded/languages/schema");
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
var translations = function () { return schema_1.languages.filter(removeEnglish).map(buildTranslation); };
var createResource = function () { return ({
    name: 'resources',
    label: '📚 Resources',
    folder: 'src/data/resources/',
    extension: 'json',
    create: true,
    fields: [
        {
            name: 'type',
            label: 'Type',
            widget: 'hidden',
            default: 'resources',
        }
    ].concat(langaugeInstance(true), translations()),
}); };
exports.default = createResource;
//# sourceMappingURL=createResources.js.map