"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var languages_1 = require("./languages");
var buildTranslation = function (_a) {
    var isoKey = _a.isoKey, nativeName = _a.nativeName;
    return ({
        label: nativeName,
        name: isoKey,
        widget: 'string',
        required: false,
        default: ' ',
    });
};
var removeEnglish = function (key) { return key !== 'eng'; };
var translations = function (isoKeys) { return isoKeys.filter(removeEnglish).map(buildTranslation); };
var createFolders = function () { return ({
    name: 'folders',
    label: '📁 Folders',
    folder: 'src/data/saved/folders/',
    extension: 'json',
    create: true,
    fields: [
        {
            name: 'type',
            label: 'Type',
            widget: 'hidden',
            default: 'folders',
        },
        {
            name: 'title',
            label: 'Folder Title',
            widget: 'string',
        },
        {
            name: 'translations',
            label: 'Translations',
            widget: 'object',
            fields: translations(languages_1.languages),
        },
        {
            name: 'icon',
            label: 'Icon',
            widget: 'icon-selector',
        },
        {
            name: 'questions',
            label: '✏️ Questions Title',
            widget: 'list',
            fields: [
                {
                    label: 'Title',
                    name: 'content',
                    collection: 'questions',
                    valueField: 'title',
                    searchFields: ['title'],
                    widget: 'relation',
                    required: false,
                    default: ' ',
                },
            ],
        },
        {
            name: 'resources',
            label: '📚 Resource Title',
            widget: 'list',
            fields: [
                {
                    label: 'Title',
                    name: 'content',
                    collection: 'resources',
                    valueField: 'title',
                    searchFields: ['title'],
                    widget: 'relation',
                    required: false,
                    default: ' ',
                },
            ],
        },
    ],
}); };
exports.default = createFolders;
//# sourceMappingURL=createFolders.js.map