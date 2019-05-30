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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var iterateOverSendableString = function (result, _a, index, _b) {
    var title = _a.title, answer = _a.answer;
    var length = _b.length;
    var addition = index + 1 + "/" + length + ": " + title + ": " + (answer !== null ? answer : '') + " '%0D%0A'";
    return result.concat(addition);
};
var convertStoryToString = function (stories, id) {
    var rawAnswers = stories[id].answers;
    var keys = Object.keys(rawAnswers);
    var answers = keys.map(function (key) {
        var _a = rawAnswers[key], title = _a.question, innerProps = __rest(_a, ["question"]);
        return __assign({ title: title }, innerProps);
    });
    return answers.reduce(iterateOverSendableString, '');
};
exports.default = convertStoryToString;
//# sourceMappingURL=index.js.map