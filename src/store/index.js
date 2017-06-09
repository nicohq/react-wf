import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import * as reducers from './reducers';
import { promiseMiddleware } from './middlewares';
import logger from 'redux-logger';

const reducer = combineReducers(reducers);
const middlewares = applyMiddleware(promiseMiddleware, logger);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    reducer,
    composeEnhancers(middlewares)
)
