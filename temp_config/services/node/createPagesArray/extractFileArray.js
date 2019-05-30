"use strict";
/* eslint-disable import/no-extraneous-dependencies */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var deepmerge_1 = __importDefault(require("deepmerge"));
var convertItemsIntoPages = function (dataSource, itemType, component) {
    var selectedItems = dataSource.reduce(function (result, object) {
        var key = Object.keys(object)[0];
        var type = object[key].type;
        if (type !== itemType) {
            return result;
        }
        return deepmerge_1.default(result, object);
    }, {});
    var paths = Object.keys(selectedItems);
    var result = paths.map(function (path) { return ({
        path: path,
        component: component,
        context: selectedItems[path],
    }); });
    return result;
};
exports.default = convertItemsIntoPages;
//# sourceMappingURL=extractFileArray.js.map