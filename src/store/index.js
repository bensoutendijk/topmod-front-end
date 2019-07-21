import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import reducers from '../reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk, logger));

export default store;
