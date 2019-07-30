import { combineReducers, createStore, applyMiddleware } from 'redux';
import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

import { authReducer } from './auth/reducers';
import { systemReducer } from './system/reducers';
import { usersReducer } from './users/reducers';
import { servicesReducer } from './services/reducers';
import { postsReducer } from './posts/reducers';
import { streamsReducer } from './streams/reducers';
import { datesReducer } from './dates/reducers';
import { REQUEST_AUTH, RECIEVE_AUTH, REJECT_AUTH } from './auth/types';

export function fetchingReducer(
  state = {},
  action: { type: any; } 
) {
  switch (action.type) {
    case REQUEST_AUTH:
      return {
        ...state,
        auth: true
      }
    case RECIEVE_AUTH:
      return {
        ...state,
        auth: false,
      }
    case REJECT_AUTH: {
      return {
        ...state,
        auth: false,
      }
    }
    default:
      return state;
  }
}

export function fetchedReducer(
  state = {},
  action: { type: any; }
) {
  switch (action.type) {
    case RECIEVE_AUTH:
      return {
        ...state,
        auth: true
      }
    case REJECT_AUTH:
      return {
        ...state,
        auth: false
      }
    default:
      return state;
  }
}


const rootReducer = combineReducers({
  fetching: fetchingReducer,
  fetched: fetchedReducer,
  system: systemReducer,
  auth: authReducer,
  users: usersReducer,
  services: servicesReducer,
  posts: postsReducer,
  streams: streamsReducer,
  date: datesReducer,
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