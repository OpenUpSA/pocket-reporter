"use strict";
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/camelcase */
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var netlify_cms_1 = __importStar(require("netlify-cms"));
var IconSelector_1 = __importDefault(require("./widgets/IconSelector"));
var Markup_1 = __importDefault(require("./widgets/IconSelector/Markup"));
var createFolders_1 = __importDefault(require("./collections/createFolders"));
var createQuestions_1 = __importDefault(require("./collections/createQuestions"));
var createResources_1 = __importDefault(require("./collections/createResources"));
var config = {
    backend: {
        name: 'github',
        repo: 'OpenUpSA/pocket-reporter',
    },
    media_folder: 'static/assets',
    public_folder: 'assets',
    publish_mode: 'editorial_workflow',
    load_config_file: false,
    editor: {
        preview: false,
    },
    collections: [createFolders_1.default(), createQuestions_1.default(), createResources_1.default()],
};
netlify_cms_1.default.registerWidget('icon-selector', IconSelector_1.default, Markup_1.default);
netlify_cms_1.init({ config: config });
//# sourceMappingURL=index.js.map