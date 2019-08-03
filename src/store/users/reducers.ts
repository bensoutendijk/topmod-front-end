import {
  UserState,
  UserActionTypes,
  REQEUST_USERS,
  REJECT_USERS,
  RECIEVE_USERS,
  IUser
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
    case REQEUST_USERS:
      return {
        ...state,
        fetching: true,
      };
    case RECIEVE_USERS:
      return {
        ...state,
        fetching: false,
        fetched: true,
        byId: {
          ...action.payload.reduce((obj, item) => {
            Object.assign(obj, { [item._id]: item });
            return obj;
          }, {})
        },
        allIds: [
          ...action.payload.map((user: IUser) => user._id)
        ]
      };
    case REJECT_USERS:
      return {
        ...state,
        fetching: false,
        fetched: false,
      };
    default:
      return state;
  }
}
