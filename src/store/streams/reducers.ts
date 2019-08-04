import {
  StreamsState,
  StreamsActionTypes,
  REQEUST_STREAMS,
  RECIEVE_STREAMS,
  REJECT_STREAMS,
  IStream
} from "./types";


const initialState: StreamsState = {
  fetching: false,
  fetched: false,
  byId: {},
  allIds: []
};

export function streamsReducer(
  state = initialState,
  action: StreamsActionTypes
): StreamsState {
  switch (action.type) {
    case REQEUST_STREAMS:
      return {
        ...state,
        fetching: true,
      };
    case RECIEVE_STREAMS:
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
          .map((user: IStream) => user._id)
          .filter((id: string) => !state.allIds.includes(id))
        ]
      };
    case REJECT_STREAMS:
      return {
        ...state,
        fetching: false,
        fetched: false,
      };
    default:
      return state;
  }
}
