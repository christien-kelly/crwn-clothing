/* 
    This script will be used to catch and log changes of redux actions in
    our application, acting as a middleware layer between actions and the 
    root-reducer.

    Date Added: May 31st, 2021
*/

import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;