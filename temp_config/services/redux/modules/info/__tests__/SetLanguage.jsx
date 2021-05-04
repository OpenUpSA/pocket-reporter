"use strict";
/* eslint-disable no-console  */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
/**
 * Imports tests themselves.
 */
var index_1 = __importStar(require("../index"));
var schema_1 = require("../../../schema");
/**
 * Execute test.
 */
var result = index_1.default(schema_1.mockInfo(), index_1.setLanguage('nso'));
// console.log('set language', result);
/**
 * Render and perform syntax highlighting on the output of the test.
 */
var Test1 = function () { return (<pre>
    <code>{JSON.stringify(result, null, 2)}</code>
  </pre>); };
exports.default = Test1;
//# sourceMappingURL=SetLanguage.jsx.map