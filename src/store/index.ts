import { combineReducers, createStore, applyMiddleware } from 'redux';
import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

import { authReducer } from './auth/reducers';
import { servicesReducer } from './services/reducers';
// import { postsReducer } from './posts/reducers';
import { streamsReducer } from './streams/reducers';
// import { datesReducer } from './dates/reducers';


const rootReducer = combineReducers({
  auth: authReducer,
  services: servicesReducer,
  // posts: postsReducer,
  streams: streamsReducer,
  // date: datesReducer,
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