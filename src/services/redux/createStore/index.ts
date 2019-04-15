/**
 * Import all general Redux tooling.
 */
import { createStore as innerCreateStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import persistState from 'redux-localstorage';
import thunk from 'redux-thunk';

/**
 * Import TypeScript static types and constants.
 */
import { schemas, persistedModules } from './data.json';

/**
 * Combine all modules into a single reducer.
 */
import stories from '../modules/stories';
import info from '../modules/info';
import transformOldStore from './transformOldStore';
import createBlankStore from './createBlankStore';

const rawReducers = {
  stories,
  info,
};

const reducers = combineReducers(rawReducers);

/**
 * Convert old schema to new schema if needed.
 */
const { legacy: legacySchemaKey, production: productionSchemaKey } = schemas;

const isBrowser = typeof window !== 'undefined';
const newStore = isBrowser && window.localStorage.getItem(productionSchemaKey);
const oldStore = isBrowser && !newStore && window.localStorage.getItem(legacySchemaKey);
const finalInitialState = oldStore ? transformOldStore(JSON.parse(oldStore)) : createBlankStore();

/**
 * Create function that will add additional functionality to store.
 */
const middleware = applyMiddleware(thunk);
const initLocalStorage = () => persistState(persistedModules, { key: productionSchemaKey });

const createEnhancers = (webStorage?: boolean) => {
  if (!webStorage || !!oldStore) {
    return composeWithDevTools(middleware);
  }

  return composeWithDevTools(middleware, initLocalStorage());
};

/**
 * Create Redux store.
 */
const createStore = (webStorage?: boolean) =>
  // @ts-ignore
  innerCreateStore(reducers, finalInitialState, createEnhancers(webStorage));

export default createStore;
