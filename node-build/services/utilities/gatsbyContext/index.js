"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var fallback = {
    navigate: function () { return window.location.href; },
    Link: 'a',
};
var _a = react_1.createContext(fallback), Provider = _a.Provider, Consumer = _a.Consumer;
exports.Provider = Provider;
exports.Consumer = Consumer;
exports.default = { Provider: Provider, Consumer: Consumer };
//# sourceMappingURL=index.js.map