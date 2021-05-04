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
exports.mockId = exports.mockStories = exports.mockSingleStory = void 0;
var faker_1 = __importDefault(require("faker"));
var uuid_1 = require("uuid");
var schema_1 = require("../../redux/schema");
exports.mockSingleStory = schema_1.mockStory;
exports.mockStories = function () {
    return new Array(faker_1.default.random.number({ min: 1, max: 50 }))
        .fill(true)
        .reduce(function (result) {
        var _a;
        return (__assign(__assign({}, result), (_a = {}, _a[uuid_1.v4()] = schema_1.mockStory(), _a)));
    }, {});
};
exports.mockId = function (stories) { return faker_1.default.random.arrayElement(Object.keys(stories)); };
//# sourceMappingURL=schema.js.map