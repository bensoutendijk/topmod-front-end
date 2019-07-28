import { combineReducers, createStore, applyMiddleware } from 'redux';
import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

import { localUserReducer } from './localUser/reducers';
import { mixerReducer } from './mixer/reducers';

const rootReducer = combineReducers({
  localUser: localUserReducer,
  mixer: mixerReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const middlewares = [reduxThunk, reduxLogger];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  );

  return store;
}