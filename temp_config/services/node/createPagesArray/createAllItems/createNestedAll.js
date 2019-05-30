"use strict";
/* eslint-disable import/no-extraneous-dependencies */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var change_case_1 = require("change-case");
var createResources_1 = __importDefault(require("./createResources"));
var createQuestions_1 = __importDefault(require("./createQuestions"));
var formatResourcesPreview_1 = __importDefault(require("./formatResourcesPreview"));
var createNestedAll = function (isoKeys, dataSource) {
    var result = isoKeys.map(function (isoKey) {
        return dataSource
            .map(function (object) {
            var _a, _b, _c, _d, _e, _f;
            if (!object) {
                return null;
            }
            var resources = object.resources ? object.resources.map(createResources_1.default(isoKey)) : [];
            var questions = object.questions ? object.questions.map(createQuestions_1.default(isoKey)) : [];
            var addParentLinks = function (items, parentUrl) {
                return items.map(function (innerObject) {
                    var _a;
                    if (!innerObject) {
                        return null;
                    }
                    var key = Object.keys(innerObject)[0];
                    var newValue = (_a = {},
                        _a[key] = __assign({}, innerObject[key], { parentUrl: parentUrl }),
                        _a);
                    return newValue;
                });
            };
            var title = object.title, translations = object.translations, icon = object.icon;
            if (isoKey === 'eng') {
                var link_1 = "/eng/folders/" + change_case_1.kebab(title) + "/index.html";
                return [
                    (_a = {},
                        _a["/eng/folders/index.html"] = {
                            type: 'folder',
                            isoKey: isoKey,
                            folders: [
                                {
                                    icon: icon,
                                    title: title,
                                    click: link_1,
                                },
                            ],
                        },
                        _a),
                    (_b = {},
                        _b[link_1] = {
                            type: 'content',
                            title: title,
                            isoKey: isoKey,
                            fallback: false,
                            icon: icon,
                            resources: formatResourcesPreview_1.default(resources),
                            questions: questions.filter(function (notNull) { return !!notNull; }),
                        },
                        _b)
                ].concat(addParentLinks(resources, link_1));
            }
            if (!translations[isoKey] || /^\s+$/.test(translations[isoKey])) {
                var link_2 = "/" + isoKey + "/folders/" + change_case_1.kebab(title) + "/index.html";
                return [
                    (_c = {},
                        _c["/" + isoKey + "/folders/index.html"] = {
                            type: 'folder',
                            isoKey: isoKey,
                            folders: [
                                {
                                    icon: icon,
                                    title: title,
                                    click: link_2,
                                },
                            ],
                        },
                        _c),
                    (_d = {},
                        _d[link_2] = {
                            type: 'content',
                            isoKey: isoKey,
                            fallback: true,
                            title: title,
                            icon: icon,
                            resources: formatResourcesPreview_1.default(resources),
                            questions: questions.filter(function (notNull) { return !!notNull; }),
                        },
                        _d)
                ].concat(addParentLinks(resources, link_2));
            }
            var link = "/" + isoKey + "/folders/" + translations[change_case_1.kebab(isoKey)] + "/index.html";
            return [
                (_e = {},
                    _e["/" + isoKey + "/folders/index.html"] = {
                        type: 'folder',
                        isoKey: isoKey,
                        folders: [
                            {
                                icon: icon,
                                title: translations[isoKey],
                                click: link,
                            },
                        ],
                    },
                    _e),
                (_f = {},
                    _f[link] = {
                        type: 'content',
                        title: translations[isoKey],
                        isoKey: isoKey,
                        fallback: false,
                        icon: icon,
                        resources: formatResourcesPreview_1.default(resources),
                        questions: questions.filter(function (notNull) { return !!notNull; }),
                    },
                    _f)
            ].concat(addParentLinks(resources, link));
        })
            .filter(function (notNull) { return !!notNull; });
    });
    return result;
};
exports.default = createNestedAll;
//# sourceMappingURL=createNestedAll.js.map