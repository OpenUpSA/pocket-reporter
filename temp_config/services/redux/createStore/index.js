"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Import all general Redux tooling.
 */
var redux_1 = require("redux");
var redux_devtools_extension_1 = require("redux-devtools-extension");
var redux_localstorage_1 = __importDefault(require("redux-localstorage"));
var redux_thunk_1 = __importDefault(require("redux-thunk"));
/**
 * Import TypeScript static types and constants.
 */
var data_json_1 = require("./data.json");
/**
 * Combine all modules into a single reducer.
 */
var stories_1 = __importDefault(require("../modules/stories"));
var info_1 = __importDefault(require("../modules/info"));
var transformOldStore_1 = __importDefault(require("./transformOldStore"));
var createBlankStore_1 = __importDefault(require("./createBlankStore"));
var rawReducers = {
    stories: stories_1.default,
    info: info_1.default,
};
var reducers = redux_1.combineReducers(rawReducers);
/**
 * Convert old schema to new schema if needed.
 */
var legacySchemaKey = data_json_1.schemas.legacy, productionSchemaKey = data_json_1.schemas.production;
var isBrowser = typeof window !== 'undefined';
var newStore = isBrowser && window.localStorage.getItem(productionSchemaKey);
var oldStore = isBrowser && !newStore && window.localStorage.getItem(legacySchemaKey);
var finalInitialState = oldStore ? transformOldStore_1.default(JSON.parse(oldStore)) : createBlankStore_1.default();
/**
 * Create function that will add additional functionality to store.
 */
var middleware = redux_1.applyMiddleware(redux_thunk_1.default);
var initLocalStorage = function () { return redux_localstorage_1.default(data_json_1.persistedModules, { key: productionSchemaKey }); };
var createEnhancers = function (webStorage) {
    if (!webStorage || !!oldStore) {
        return redux_devtools_extension_1.composeWithDevTools(middleware);
    }
    return redux_devtools_extension_1.composeWithDevTools(middleware, initLocalStorage());
};
/**
 * Create Redux store.
 */
var createStore = function (webStorage) {
    // @ts-ignore
    return redux_1.createStore(reducers, finalInitialState, createEnhancers(webStorage));
};
exports.default = createStore;
//# sourceMappingURL=index.js.map