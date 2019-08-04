import {
  ServicesState,
  ServicesActionTypes,
  REQUEST_SERVICES,
  REJECT_SERVICES,
  RECIEVE_SERVICES,
  IService
} from "./types";


const initialState: ServicesState = {
  fetching: false,
  fetched: false,
  byId: {},
  allIds: []
};

export function servicesReducer(
  state = initialState,
  action: ServicesActionTypes
): ServicesState {
  switch (action.type) {
    case REQUEST_SERVICES:
      return {
        ...state,
        fetching: true,
      };
    case RECIEVE_SERVICES:
      return {
        ...state,
        fetching: false,
        fetched: true,
        byId: {
          ...state.byId,
          ...action.payload.reduce((obj, item) => {
            Object.assign(obj, { [item._id]: item });
            return obj;
          }, {})
        },
        allIds: [
          ...state.allIds,
          ...action.payload
          .map((user: IService) => user._id)
          .filter((id: string) => !state.allIds.includes(id))
        ]
      };
    case REJECT_SERVICES:
      return {
        ...state,
        fetching: false,
        fetched: false,
      };
    default:
      return state;
  }
}
