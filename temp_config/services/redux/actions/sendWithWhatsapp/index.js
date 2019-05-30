"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var convertStoryToString_1 = __importDefault(require("../../../utilities/convertStoryToString"));
var stories_1 = require("../../modules/stories");
var apiUrl = 'https://api.whatsapp.com/send';
var createWhatsappUrl = function (text) { return apiUrl.concat("?text=" + encodeURIComponent(text)); };
var sendWithWhatsApp = function (id) { return function (dispatch, getState) {
    var stories = getState().stories;
    var body = convertStoryToString_1.default(stories, id);
    var subject = stories[id].name;
    window.open(createWhatsappUrl(subject + "%0D%0A" + body));
    dispatch(stories_1.logAsSent(id));
}; };
exports.default = sendWithWhatsApp;
//# sourceMappingURL=index.js.map