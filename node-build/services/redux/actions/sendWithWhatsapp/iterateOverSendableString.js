"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * TODO: Add description
 */
var iterateOverSendableString = function (result, _a, index, _b) {
    var title = _a.title, answer = _a.answer;
    var length = _b.length;
    var addition = index + 1 + "/" + length + ": " + title + ": " + (answer !== null ? answer : '') + " --- ";
    return result.concat(addition);
};
exports.default = iterateOverSendableString;
//# sourceMappingURL=iterateOverSendableString.js.map