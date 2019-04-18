"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calcIfExternalLink = function (url, domain) {
    if (/^\//.test(url)) {
        return false;
    }
    var condition = new RegExp(domain, 'i');
    return !condition.test(url);
};
var calcIfFunction = function (value) { return ({}.toString.call(value) === '[object Function]'); };
var calcClickType = function (value) {
    if (!value) {
        return null;
    }
    if (calcIfFunction(value)) {
        return 'callback';
    }
    return calcIfExternalLink(value) ? 'external' : 'internal';
};
exports.default = calcClickType;
//# sourceMappingURL=index.js.map