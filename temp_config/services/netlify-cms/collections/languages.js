"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isoKeys = ['eng', 'afr', 'spa', 'xho', 'nso', 'por', 'sot', 'tsn', 'zul'];
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
exports.languages = exports.isoKeys.map(function (isoKey, index) { return ({
    isoKey: isoKey,
    nativeName: exports.nativeNames[index],
}); });
//# sourceMappingURL=languages.js.map