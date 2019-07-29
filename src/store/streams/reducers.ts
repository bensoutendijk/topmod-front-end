import {
  LocalUserState,
  LocalUserActionTypes,
  GET_LOCAL_USER_PENDING,
  GET_LOCAL_USER_FULFILLED,
  GET_LOCAL_USER_REJECTED,
  LOGIN_LOCAL_USER_PENDING,
  LOGIN_LOCAL_USER_FULFILLED,
  LOGIN_LOCAL_USER_REJECTED,
  CREATE_LOCAL_USER_PENDING,
  CREATE_LOCAL_USER_FULFILLED,
  CREATE_LOCAL_USER_REJECTED,
  LOGOUT_LOCAL_USER,
} from "./types";


const initialState: LocalUserState = {
  fetching: false,
  fetched: false,
  user: undefined,
  errors: undefined,
};

export function streamsReducer(
  state = initialState,
  action: LocalUserActionTypes
): LocalUserState {
  switch (action.type) {
    case GET_LOCAL_USER_PENDING:
      return {
        ...state,
        fetching: true,
      };
    case GET_LOCAL_USER_FULFILLED:
      return {
        ...state,
        fetching: false,
        fetched: true,
        user: action.payload,
      };
    case GET_LOCAL_USER_REJECTED:
      return {
        ...state,
        fetching: false,
        errors: action.payload,
      };
    case LOGIN_LOCAL_USER_PENDING:
      return {
        ...state,
        fetching: true,
      };
    case LOGIN_LOCAL_USER_FULFILLED:
      return {
        ...state,
        fetching: false,
        fetched: true,
        user: action.payload,
      };
    case LOGIN_LOCAL_USER_REJECTED:
      return {
        ...state,
        fetching: false,
        errors: action.payload,
      };
    case CREATE_LOCAL_USER_PENDING:
      return {
        ...state,
        fetching: true,
      };
    case CREATE_LOCAL_USER_FULFILLED:
      return {
        ...state,
        fetching: false,
        fetched: true,
        user: action.payload,
      };
    case CREATE_LOCAL_USER_REJECTED:
      return {
        ...state,
        fetching: false,
        errors: action.payload,
      };
    case LOGOUT_LOCAL_USER:
      return {
        ...state,
        fetched: false,
        user: undefined,
      };
    default:
      return state;
  }
}
