import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import * as reducers from './reducers';
import { promiseMiddleware } from './middlewares';

const reducer = combineReducers(reducers);
const middlewares = applyMiddleware(promiseMiddleware);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    reducer,
    composeEnhancers(middlewares)
)
