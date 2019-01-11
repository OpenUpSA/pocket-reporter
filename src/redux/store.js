import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import persistState from 'redux-localstorage';
import thunk from 'redux-thunk';

import initialState from './initialState.json';
import stories from './modules/stories';


const rawReducers = {
  stories,
};


const reducers = combineReducers(rawReducers);
const middleware = applyMiddleware(thunk);
const enhancers = composeWithDevTools(
  middleware,
  persistState(['stories'], { key: 'state' }),
);


export default createStore(reducers, initialState, enhancers);
