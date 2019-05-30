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
/**
 * TODO: Add description
 */
var createAnswersObject = function (result, _a, index) {
    var _b;
    var question = _a.question, description = _a.description;
    return (__assign({}, result, (_b = {}, _b[index] = {
        answer: null,
        description: description,
        edits: 0,
        firstAnswered: null,
        lastEdit: null,
        question: question,
        sent: 0,
    }, _b)));
};
exports.default = createAnswersObject;
//# sourceMappingURL=createAnswersObject.js.map