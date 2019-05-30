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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Import third-party tooling.
 */
var lodash_1 = require("lodash");
/**
 * Imports custom utilities.
 */
var getTimeStamp_1 = __importDefault(require("./getTimeStamp"));
var createAnswersObject_1 = __importDefault(require("./createAnswersObject"));
/**
 * Register action types for this module.
 */
var ADD = 'stories/ADD';
var REMOVE = 'stories/REMOVE';
var UPDATE = 'stories/UPDATE';
var LOG_SENT = 'stories/LOG_SENT';
/**
 * TODO: Add description
 */
// @ts-ignore
var reducer = function (state, _a) {
    var _b, _c, _d, _e;
    if (state === void 0) { state = {}; }
    var _f = _a === void 0 ? {} : _a, type = _f.type, payload = _f.payload;
    switch (type) {
        case LOG_SENT:
            return __assign({}, state, (_b = {}, _b[payload.id] = __assign({}, state[payload.id], { sent: state[payload.id].sent + 1 }), _b));
        case ADD:
            return __assign({}, state, (_c = {}, _c[payload.id] = {
                answers: payload.questions.reduce(createAnswersObject_1.default, {}),
                lastEdit: null,
                sent: 0,
                template: payload.template,
                name: payload.name,
                started: getTimeStamp_1.default(),
            }, _c));
        case UPDATE:
            return __assign({}, state, (_d = {}, _d[payload.id] = __assign({}, state[payload.id], { answers: __assign({}, state[payload.id].answers, (_e = {}, _e[payload.questionkey] = __assign({}, state[payload.id].answers[payload.questionkey], { answer: payload.answer }), _e)), lastEdit: getTimeStamp_1.default() }), _d));
        case REMOVE:
            return lodash_1.omit(state, payload.id);
        default:
            return state;
    }
};
/**
 * TODO: Add description
 */
var add = function (id, name, questions, template) {
    return {
        type: ADD,
        payload: {
            id: id,
            questions: questions,
            name: name,
            template: template,
        },
    };
};
exports.add = add;
/**
 * TODO: Add description
 */
var logAsSent = function (id) { return ({
    type: LOG_SENT,
    payload: {
        id: id,
    },
}); };
exports.logAsSent = logAsSent;
/**
 * TODO: Add description
 */
var update = function (id, questionkey, answer) { return ({
    type: UPDATE,
    payload: {
        id: id,
        questionkey: questionkey,
        answer: answer,
    },
}); };
exports.update = update;
/**
 * TODO: Add description
 */
var remove = function (id) { return ({
    type: REMOVE,
    payload: {
        id: id,
    },
}); };
exports.remove = remove;
exports.default = reducer;
//# sourceMappingURL=index.js.map