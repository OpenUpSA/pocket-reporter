"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var faker_1 = __importDefault(require("faker"));
var uuid_1 = require("uuid");
var idsArray = [1, 2, 3, 4, 5, 6, 7, 8].map(function () { return uuid_1.v4(); });
exports.mockId = function () { return faker_1.default.random.arrayElement(idsArray); };
exports.mockText = function () { return faker_1.default.hacker.phrase(); };
//# sourceMappingURL=schema.js.map