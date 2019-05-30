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
var forceToArray = function (value) { return (Array.isArray(value) ? value : [value]); };
var notInsideArray = function (array) {
    if (array === void 0) { array = []; }
    return function (value) { return !array.find(function (arrayValue) { return arrayValue === value; }); };
};
var createRemoveProps = function (scopedCreateElement) { return function (component, blacklist) {
    if (blacklist === void 0) { blacklist = []; }
    return function (props) {
        var newPropsKeys = Object.keys(props).filter(notInsideArray(forceToArray(blacklist)));
        var newProps = newPropsKeys.reduce(function (result, key) {
            var _a;
            return (__assign({}, result, (_a = {}, _a[key] = props[key], _a)));
        }, {});
        return scopedCreateElement(component, newProps, props.children);
    };
}; };
exports.createRemoveProps = createRemoveProps;
exports.default = createRemoveProps(react_1.createElement);
//# sourceMappingURL=index.js.map