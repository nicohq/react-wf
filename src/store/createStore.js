import { createStore, combineReducers } from 'redux';
import * as reducers from './reducers';

console.log(reducers);

const reducer = combineReducers(reducers);

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
