"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Imports tooling required to build mock data
 */
var faker_1 = __importDefault(require("faker"));
exports.isoKeys = ['eng', 'afr', 'spa', 'xho', 'nso', 'por', 'sot', 'tsn', 'zul'];
exports.mockIsoKey = function () { return faker_1.default.random.arrayElement(exports.isoKeys); };
exports.nativeNames = [
    'English',
    'Afrikaans',
    'Español',
    'IsiXhosa',
    'Northern Sotho',
    'Português',
    'Southern Sotho',
    'Tswana',
    'isiZulu',
];
exports.mockNativeName = function () {
    return faker_1.default.random.arrayElement(exports.nativeNames);
};
exports.languages = exports.isoKeys.map(function (isoKey, index) { return ({
    isoKey: isoKey,
    nativeName: exports.nativeNames[index],
}); });
exports.mockLanguage = function () { return faker_1.default.random.arrayElement(exports.languages); };
//# sourceMappingURL=schema.js.map