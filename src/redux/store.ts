import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
