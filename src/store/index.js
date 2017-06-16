import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from '../reducers';

let logging_enabled = true;

const middleWare = [thunk];

logging_enabled ? middleWare.push(logger) : console.log("To enable redux loggering, set logging_enabled to true in /src/store/index.js");

const createStoreWithMiddleware = applyMiddleware(...middleWare)(createStore);

const store = createStoreWithMiddleware(reducers);

export default store;
