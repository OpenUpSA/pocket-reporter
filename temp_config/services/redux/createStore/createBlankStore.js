"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createBlankStore = function () { return ({
    info: {
        lastAction: null,
        joined: new Date().getTime(),
        language: null,
    },
    stories: {},
}); };
exports.default = createBlankStore;
//# sourceMappingURL=createBlankStore.js.map