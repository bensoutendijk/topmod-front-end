import { createStore, applyMiddleware } from "redux";
import reducers from "../reducers";
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk, logger));

export default store;