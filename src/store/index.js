import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import combineReducers from '../reducers';
let store;
export default function configStore() {
  store = createStore(combineReducers, applyMiddleware(logger, thunk));
  return store;
}
