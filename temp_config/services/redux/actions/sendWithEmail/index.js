"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var convertStoryToString_1 = __importDefault(require("../../../utilities/convertStoryToString"));
var stories_1 = require("../../modules/stories");
/**
 * TODO: Add description
 */
var sendMail = function (_a) {
    var _b = _a.email, email = _b === void 0 ? 'your@email.address' : _b, _c = _a.subject, subject = _c === void 0 ? 'Pocket Reporter Story' : _c, _d = _a.body, body = _d === void 0 ? '' : _d;
    var link = "mailto:" + email + "?subject=" + subject + "&body=" + body;
    window.open(link, 'pr_email');
};
/**
 * TODO: Add description
 */
var sendWithEmail = function (id) { return function (dispatch, getState) {
    var stories = getState().stories;
    var body = convertStoryToString_1.default(stories, id);
    var subject = stories[id].name;
    sendMail({ subject: subject, body: body });
    dispatch(stories_1.logAsSent(id));
}; };
exports.default = sendWithEmail;
//# sourceMappingURL=index.js.map