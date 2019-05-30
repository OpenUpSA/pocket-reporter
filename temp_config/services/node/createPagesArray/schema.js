"use strict";
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
var faker_1 = __importDefault(require("faker"));
var schema_1 = require("../../../data/saved/folders/schema");
var schema_2 = require("../../../data/saved/questions/schema");
var schema_3 = require("../../../data/saved/resources/schema");
exports.mockNestedStoryTemplate = function () { return ({
    content: faker_1.default.random.boolean() ? schema_2.mockStoryTemplate() : null,
}); };
exports.mockNestedResource = function () { return ({
    content: faker_1.default.random.boolean() ? schema_3.mockResource() : null,
}); };
var mockNestedContent = function () { return ({
    questions: [1, 2, 3, 4, 5].map(exports.mockNestedStoryTemplate),
    resources: [1, 2, 3, 4, 5].map(exports.mockNestedResource),
}); };
var mockNestedFolder = function () { return ({
    node: __assign({}, schema_1.mockFolder(), mockNestedContent()),
}); };
exports.mockResponse = function () { return ({
    data: {
        allFoldersJson: {
            edges: [1, 2, 3, 4, 5].map(mockNestedFolder),
        },
    },
}); };
//# sourceMappingURL=schema.js.map