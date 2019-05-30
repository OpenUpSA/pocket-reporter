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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var addProps = function (Component, outerProps, keyString) { return function (innerProps, index) {
    var children = outerProps.children;
    var key = innerProps[keyString] || null;
    var newProps = __assign({}, outerProps, innerProps, { key: key,
        index: index });
    return react_1.createElement(Component, newProps, children);
}; };
exports.default = addProps;
//# sourceMappingURL=index.js.map