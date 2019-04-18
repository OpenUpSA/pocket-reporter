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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var iterateOverSendableString_1 = __importDefault(require("./iterateOverSendableString"));
var stories_1 = require("../../modules/stories");
var apiUrl = 'https://api.whatsapp.com/send';
/**
 * TODO: Add description
 */
var createWhatsappUrl = function (text) { return apiUrl.concat("?text=" + encodeURIComponent(text)); };
/**
 * TODO: Add description
 */
var sendWithWhatsApp = function (id) { return function (dispatch, getState) {
    var stories = getState().stories;
    var rawAnswers = stories[id].answers;
    var keys = Object.keys(rawAnswers);
    var answers = keys.map(function (key) {
        var _a = rawAnswers[key], title = _a.question, innerProps = __rest(_a, ["question"]);
        return __assign({ title: title }, innerProps);
    });
    var result = answers.reduce(iterateOverSendableString_1.default, '');
    window.open(createWhatsappUrl(result));
    dispatch(stories_1.logAsSent(id));
}; };
exports.default = sendWithWhatsApp;
//# sourceMappingURL=index.js.map