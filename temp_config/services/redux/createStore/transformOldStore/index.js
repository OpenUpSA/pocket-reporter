"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Import custom utility functions that will be used to transform data
 */
var convertToNewInfo_1 = __importDefault(require("./convertToNewInfo"));
var convertToNewAnswers_1 = __importDefault(require("./convertToNewAnswers"));
/**
 * Start conversion
 */
var transformOldStore = function (oldStore) { return ({
    info: convertToNewInfo_1.default(oldStore.locale),
    stories: convertToNewAnswers_1.default(oldStore.stories, oldStore.locale),
}); };
exports.default = transformOldStore;
//# sourceMappingURL=index.js.map