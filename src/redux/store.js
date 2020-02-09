
/**
 * Module dependencies.
 */

import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middleware = [
  applyMiddleware(thunk),
  ...(window.__REDUX_DEVTOOLS_EXTENSION__ ? [window.__REDUX_DEVTOOLS_EXTENSION__()] : [])
]

const store = createStore(
  rootReducer,
  compose(...middleware)
);

/**
 * Export `store`.
 */

export default store;
