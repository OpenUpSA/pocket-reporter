"use strict";
/* eslint-disable @typescript-eslint/camelcase */
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
 * Import third-party utility functions that will be used to transform data
 */
var v4_1 = __importDefault(require("uuid/v4"));
/**
 * Import all content in state it was when legacy schema was replaced
 */
var af_json_1 = __importDefault(require("./data/af.json"));
var en_za_json_1 = __importDefault(require("./data/en-za.json"));
var es_json_1 = __importDefault(require("./data/es.json"));
var nso_json_1 = __importDefault(require("./data/nso.json"));
var pt_json_1 = __importDefault(require("./data/pt.json"));
var st_json_1 = __importDefault(require("./data/st.json"));
var tn_json_1 = __importDefault(require("./data/tn.json"));
var xh_json_1 = __importDefault(require("./data/xh.json"));
var ZU_json_1 = __importDefault(require("./data/ZU.json"));
/**
 * Combine all legacy data into a single object.
 */
var oldDataObject = {
    af: af_json_1.default,
    'en-za': en_za_json_1.default,
    es: es_json_1.default,
    nso: nso_json_1.default,
    pt: pt_json_1.default,
    st: st_json_1.default,
    tn: tn_json_1.default,
    xh: xh_json_1.default,
    ZU: ZU_json_1.default,
};
/**
 * TODO: Describe.
 */
var findQuestion = function (oldIsoKey, id, key) {
    var question = oldDataObject[oldIsoKey][id].questions[key];
    var getFallback = function () { return oldDataObject['en-za'][id].questions[key]; };
    return question || getFallback() || null;
};
/**
 * :TODO: Describe.
 */
var createAnswerObject = function (answers, oldIsoKey, id) {
    var result = answers.reduce(function (innerResult, _a) {
        var _b;
        var key = _a.key, notes = _a.notes;
        return (__assign({}, innerResult, (_b = {}, _b[key] = {
            question: findQuestion(oldIsoKey, id, key),
            answer: notes || null,
            edits: 0,
            firstAnswered: null,
            lastEdit: null,
        }, _b)));
    }, {});
    return result;
};
var convertToNewAnswers = function (stories, oldIsoKey) {
    return stories.reduce(function (result, _a) {
        var _b;
        var created_at = _a.created_at, updated_at = _a.updated_at, answers = _a.answers, topic = _a.topic, name = _a.title;
        var id = parseInt(topic, 10);
        var template = oldDataObject[oldIsoKey][id].name;
        return __assign({}, result, (_b = {}, _b[v4_1.default()] = {
            name: name,
            template: template,
            started: created_at,
            lastEdit: updated_at,
            sent: 0,
            answers: createAnswerObject(answers, oldIsoKey, id),
        }, _b));
    }, {});
};
exports.default = convertToNewAnswers;
//# sourceMappingURL=convertToNewAnswers.js.map