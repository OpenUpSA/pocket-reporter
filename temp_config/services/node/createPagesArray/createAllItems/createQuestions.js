"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createQuestions = function (isoKey) { return function (object) {
    if (!object || !object.content) {
        return null;
    }
    var _a = object.content, title = _a.title, questions = _a.questions;
    if (isoKey === 'eng') {
        return {
            type: 'question',
            fallback: false,
            isoKey: isoKey,
            title: title,
            questions: questions,
        };
    }
    if (!object[isoKey] || !object[isoKey].title || /^\s+$/.test(object[isoKey].title)) {
        return {
            type: 'question',
            fallback: true,
            isoKey: isoKey,
            title: title,
            questions: questions,
        };
    }
    return {
        type: 'question',
        fallback: false,
        isoKey: isoKey,
        title: object[isoKey].title,
        questions: object[isoKey].questions.filter(function (notNull) { return !!notNull; }),
    };
}; };
exports.default = createQuestions;
//# sourceMappingURL=createQuestions.js.map