import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import persistState from 'redux-localstorage';
import thunk from 'redux-thunk';

import initialState from './initialState.json';
import user from './modules/user';
import days from './modules/image';


const rawReducers = {
  user,
  days,
};


const reducers = combineReducers(rawReducers);
const middleware = applyMiddleware(thunk);
const enhancers = composeWithDevTools(
  middleware,
  persistState(null, { key: 'state' }),
);


export default createStore(reducers, initialState, enhancers);
