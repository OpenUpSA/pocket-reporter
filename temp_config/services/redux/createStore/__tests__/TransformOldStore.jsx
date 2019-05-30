"use strict";
/* eslint-disable no-console  */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
/**
 * Imports everything needed to execute this specific test.
 */
var schema_1 = require("../../schema");
var transformOldStore_1 = __importDefault(require("../transformOldStore"));
/**
 * Execute test.
 */
// console.log(mockOldStore());
var result = transformOldStore_1.default(schema_1.mockOldStore());
/**
 * Render and perform syntax highlighting on the output of the test.
 */
var Test2 = function () { return (<pre>
    <code>{JSON.stringify(result, null, 2)}</code>
  </pre>); };
exports.default = Test2;
//# sourceMappingURL=TransformOldStore.jsx.map