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
 * Imports tooling required to build mock data
 */
var faker_1 = __importDefault(require("faker"));
var mockQuestionObject = function () { return ({
    question: faker_1.default.hacker.phrase(),
    description: faker_1.default.random.boolean() ? faker_1.default.lorem.paragraph() : null,
}); };
var mockLanguageStory = function () { return ({
    title: faker_1.default.commerce.productName(),
    questions: [1, 2, 3, 4, 5].map(mockQuestionObject),
}); };
exports.mockStoryTemplate = function () { return (__assign({}, mockLanguageStory(), { afr: faker_1.default.random.boolean() ? mockLanguageStory() : null, spa: faker_1.default.random.boolean() ? mockLanguageStory() : null, xho: faker_1.default.random.boolean() ? mockLanguageStory() : null, nso: faker_1.default.random.boolean() ? mockLanguageStory() : null, por: faker_1.default.random.boolean() ? mockLanguageStory() : null, sot: faker_1.default.random.boolean() ? mockLanguageStory() : null, tsn: faker_1.default.random.boolean() ? mockLanguageStory() : null, zul: faker_1.default.random.boolean() ? mockLanguageStory() : null })); };
//# sourceMappingURL=schema.js.map