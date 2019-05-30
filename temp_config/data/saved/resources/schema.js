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
/**
 * Imports tooling required to build mock data
 */
var faker_1 = __importDefault(require("faker"));
var mockLanguageResource = function () { return ({
    title: faker_1.default.commerce.productName(),
    body: faker_1.default.lorem.paragraphs(8),
}); };
exports.mockResource = function () { return (__assign({}, mockLanguageResource(), { afr: faker_1.default.random.boolean() ? mockLanguageResource() : null, spa: faker_1.default.random.boolean() ? mockLanguageResource() : null, xho: faker_1.default.random.boolean() ? mockLanguageResource() : null, nso: faker_1.default.random.boolean() ? mockLanguageResource() : null, por: faker_1.default.random.boolean() ? mockLanguageResource() : null, sot: faker_1.default.random.boolean() ? mockLanguageResource() : null, tsn: faker_1.default.random.boolean() ? mockLanguageResource() : null, zul: faker_1.default.random.boolean() ? mockLanguageResource() : null })); };
//# sourceMappingURL=schema.js.map