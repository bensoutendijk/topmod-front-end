import {
  UserState,
  UserActionTypes,
  ADD_USER,
  UPDATE_USER,
  REMOVE_USER
} from "./types";


const initialState: UserState = {
  fetching: false,
  fetched: false,
  byId: {},
  allIds: []
};

export function usersReducer(
  state = initialState,
  action: UserActionTypes
): UserState {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        fetching: true,
        byId: {
          ...state.byId,
          [action.payload._id]: action.payload
        },
        allIds: [
          ...state.allIds,
          action.payload._id
        ]
      };
    case UPDATE_USER:
      return {
        ...state,
        fetching: true,
        byId: {
          ...state.byId,
          [action.payload._id]: action.payload
        },
        allIds: [
          ...state.allIds,
          action.payload._id
        ]
      };
    case REMOVE_USER:
      return {
        ...state,
        fetching: true,
        byId: {
          ...state.byId,
          [action.payload]: undefined
        },
        allIds: state.allIds.filter(element => element !== action.payload)
      };
    default:
      return state;
  }
}
