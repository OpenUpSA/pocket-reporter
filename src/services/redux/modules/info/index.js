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
/**
 * Register action types for this module.
 */
var SET_LANGUAGE = 'info/SET_LANGUAGE';
/**
 * TODO: Add description
 */
// @ts-ignore
var reducer = function (state, _a) {
    if (state === void 0) { state = {}; }
    var _b = _a === void 0 ? {} : _a, type = _b.type, payload = _b.payload;
    switch (type) {
        case SET_LANGUAGE:
            return __assign({}, state, { language: payload.language });
        default:
            return state;
    }
};
/**
 * TODO: Add description
 */
var setLanguage = function (language) { return ({
    type: SET_LANGUAGE,
    payload: {
        language: language,
    },
}); };
export { setLanguage };
export default reducer;
