"use strict";
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable no-console */
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
 * Imports tooling required to build mock data
 */
var faker_1 = __importDefault(require("faker"));
var moment_1 = __importDefault(require("moment"));
var uuid_1 = require("uuid");
/**
 * Import TypeScript static types.
 */
var schema_1 = require("../../data/hardcoded/languages/schema");
/**
 * Create mock specific constants.
 */
var veryLongAgo = moment_1.default()
    .subtract(100, 'days')
    .toString();
var longAgo = moment_1.default()
    .subtract(50, 'days')
    .toString();
var someTimeAgo = moment_1.default()
    .subtract(20, 'days')
    .toString();
var recentAgo = moment_1.default()
    .subtract(5, 'days')
    .toString();
exports.mockLastAction = function () { return faker_1.default.date.between(longAgo, someTimeAgo).getTime(); };
exports.mockQuestion = function () { return faker_1.default.hacker.phrase() + "?"; };
exports.mockDescription = function () { return faker_1.default.lorem.paragraphs(2); };
exports.mockSingleAnswer = function () { return faker_1.default.hacker.phrase(); };
exports.mockEdits = function () { return faker_1.default.random.number({ min: 1, max: 6 }); };
exports.mockFirstAnswered = function () {
    return faker_1.default.date.between(longAgo, someTimeAgo).getTime();
};
exports.mockAnswerLastEdit = function () {
    return faker_1.default.date.between(someTimeAgo, recentAgo).getTime();
};
exports.mockAnswerObject = function (answered, edited) { return ({
    question: exports.mockQuestion(),
    description: exports.mockDescription(),
    answer: answered ? exports.mockSingleAnswer() : null,
    edits: edited ? exports.mockEdits() : null,
    firstAnswered: answered ? exports.mockFirstAnswered() : null,
    lastEdit: edited ? exports.mockAnswerLastEdit() : null,
}); };
exports.mockLastEditStory = function () {
    return faker_1.default.date.between(someTimeAgo, recentAgo).getTime();
};
exports.mockStartedStory = function () {
    return faker_1.default.date.between(longAgo, someTimeAgo).getTime();
};
exports.mockStory = function (answered, edited) {
    var _a;
    return ({
        lastEdit: edited ? exports.mockLastEditStory() : null,
        started: exports.mockStartedStory(),
        sent: faker_1.default.random.number(),
        answers: (_a = {},
            _a[uuid_1.v4()] = exports.mockAnswerObject(!!answered && faker_1.default.random.boolean(), !!edited && faker_1.default.random.boolean()),
            _a),
    });
};
exports.mockLastUserEdit = function () { return faker_1.default.date.recent(5).getTime(); };
exports.mockJoined = function () { return faker_1.default.date.between(veryLongAgo, longAgo).getTime(); };
exports.mockLanguage = function () { return faker_1.default.random.arrayElement(schema_1.isoKeys); };
exports.mockInfo = function () { return ({
    lastAction: exports.mockLastAction(),
    joined: exports.mockJoined(),
    language: exports.mockLanguage(),
}); };
var addObject = function (result) {
    var _a;
    return (__assign({}, result, (_a = {}, _a[uuid_1.v4()] = exports.mockStory(), _a)));
};
exports.mockStore = function () { return ({
    info: exports.mockInfo(),
    stories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce(addObject, {}),
}); };
exports.mockOldLanguageKey = function () {
    return faker_1.default.random.arrayElement(['en-za', 'af', 'es', 'xh', 'nso', 'pt', 'st', 'tn', 'ZU']);
};
exports.mockOldStoryItem = function () { return ({
    created_at: '2019-04-13T19:48:34.818Z',
    updated_at: '2019-04-13T19:48:50.989Z',
    topic: faker_1.default.random.number({ min: 1, max: 4 }).toString(),
    title: faker_1.default.commerce.productName(),
    id: faker_1.default.random.number({ min: 1, max: 4 }),
    answers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (key) { return ({
        key: key.toString(),
        done: faker_1.default.random.boolean(),
        notes: faker_1.default.random.boolean() ? faker_1.default.hacker.phrase() : null,
    }); }),
}); };
exports.mockOldStore = function () { return ({
    nextId: faker_1.default.random.number(),
    customTopics: [],
    version: faker_1.default.random.number(),
    user: {},
    locale: exports.mockOldLanguageKey(),
    stories: [1, 2, 3, 4, 5, 6, 7, 8, 9].map(exports.mockOldStoryItem),
}); };
//# sourceMappingURL=schema.js.map