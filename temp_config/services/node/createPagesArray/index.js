"use strict";
/* eslint-disable import/no-extraneous-dependencies */
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var createAllItems_1 = __importDefault(require("./createAllItems"));
var extractFileArray_1 = __importDefault(require("./extractFileArray"));
var createPagesArray = function (response) {
    var itemsArray = createAllItems_1.default(response);
    var result = __spreadArrays(extractFileArray_1.default(itemsArray, 'folder', './src/templates/folders.js'), extractFileArray_1.default(itemsArray, 'resource', './src/templates/resource.js'), extractFileArray_1.default(itemsArray, 'content', './src/templates/content.js'));
    return result;
};
exports.default = createPagesArray;
//# sourceMappingURL=index.js.map