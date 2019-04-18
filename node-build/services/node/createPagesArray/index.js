"use strict";
/* eslint-disable import/no-extraneous-dependencies */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var createAllItems_1 = __importDefault(require("./createAllItems"));
var extractFileArray_1 = __importDefault(require("./extractFileArray"));
var createPagesArray = function (response) {
    var itemsArray = createAllItems_1.default(response);
    var result = extractFileArray_1.default(itemsArray, 'folder', './src/templates/folders.js').concat(extractFileArray_1.default(itemsArray, 'resource', './src/templates/resource.js'), extractFileArray_1.default(itemsArray, 'content', './src/templates/content.js'));
    return result;
};
exports.default = createPagesArray;
//# sourceMappingURL=index.js.map