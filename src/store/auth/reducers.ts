import {
  AuthState,
  AuthActionTypes,
  RECIEVE_AUTH,
  REJECT_AUTH,
  REQUEST_AUTH
} from "./types";


const initialState: AuthState = {
  fetched: false,
  fetching: false,
};

export function authReducer(
  state = initialState,
  action: AuthActionTypes
): AuthState {
  switch (action.type) {
    case REQUEST_AUTH:
      return {
        ...state,
        fetching: true,
      }
    case RECIEVE_AUTH:
      return {
        ...state,
        fetching: false,
        fetched: true,
        user: action.payload,
      }
    case REJECT_AUTH:
      return {
        ...state,
        fetching: false,
      }
    default:
      return state;
  }
}
