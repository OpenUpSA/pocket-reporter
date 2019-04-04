import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import persistState from 'redux-localstorage';
import thunk from 'redux-thunk';
import adapter from './adapter';
import './actions/sendWithWhatsApp';


import initialState from './initialState.json';
import stories from './modules/stories';
import info from './modules/info';

const transformedStore = adapter();
const state = transformedStore || initialState;

const rawReducers = {
  stories,
  info,
};


const initLocalStorage = () => persistState(['info', 'stories'], { key: '03_04_2019' });
const isNode = typeof window === 'undefined';


const reducers = combineReducers(rawReducers);
const middleware = applyMiddleware(thunk);


const createEnhancers = () => {
  if (isNode) {
    return composeWithDevTools(middleware);
  }

  return composeWithDevTools(middleware, initLocalStorage());
};

export default createStore(reducers, state, createEnhancers());
