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
var index_1 = __importDefault(require("../index"));
var schema_1 = require("../schema");
/**
 * Execute test.
 */
var result = index_1.default(schema_1.mockResponse());
// console.log(result);
/**
 * Render and perform syntax highlighting on the output of the test.
 */
var Default = function () { return (<pre>
    <code>{JSON.stringify(result, null, 2)}</code>
  </pre>); };
exports.default = Default;
//# sourceMappingURL=Default.jsx.map