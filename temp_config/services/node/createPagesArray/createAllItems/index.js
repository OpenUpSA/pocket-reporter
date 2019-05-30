"use strict";
/* eslint-disable import/no-extraneous-dependencies */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var schema_1 = require("../../../../data/hardcoded/languages/schema");
var createNestedAll_1 = __importDefault(require("./createNestedAll"));
var createAllItems = function (response) {
    var foldersArray = response.data.allFoldersJson.edges.map(function (_a) {
        var node = _a.node;
        return node;
    });
    var nestedAllItems = createNestedAll_1.default(schema_1.isoKeys, foldersArray);
    var result = lodash_1.flatten(lodash_1.flatten(nestedAllItems)).filter(function (value) { return !!value; });
    return result;
};
exports.default = createAllItems;
//# sourceMappingURL=index.js.map