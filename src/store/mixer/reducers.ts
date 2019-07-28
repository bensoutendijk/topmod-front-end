import {
  MixerState,
  MixerActionTypes,
  GET_MIXER_USER_PENDING,
  GET_MIXER_USER_FULFILLED,
  GET_MIXER_USER_REJECTED,
  GET_MIXER_CHAT_HISTORY_PENDING,
  GET_MIXER_CHAT_HISTORY_FULFILLED,
  GET_MIXER_CHAT_HISTORY_REJECTED,
  UPDATE_MIXER_CHAT,
  GET_MIXER_MOD_LIST_PENDING,
  GET_MIXER_MOD_LIST_FULFILLED,
  GET_MIXER_MOD_LIST_REJECTED,
  GET_MIXER_VIEWERS_PENDING,
  GET_MIXER_VIEWERS_FULFILLED,
  GET_MIXER_VIEWERS_REJECTED,
  GET_MIXER_CHAT_CLIENT_PENDING,
  GET_MIXER_CHAT_CLIENT_FULFILLED,
  GET_MIXER_CHAT_CLIENT_REJECTED,
  GET_MIXER_STREAMS_PENDING,
  GET_MIXER_STREAMS_FULFILLED,
  GET_MIXER_STREAMS_REJECTED,
} from "./types";

const initialState: MixerState = {
  user: {
    fetching: false,
    fetched: false,
    data: undefined,
    errors: undefined,
  },
  chat: {
    fetching: false,
    fetched: false,
    data: undefined,
  },
  chatClient: {
    fetching: false,
    fetched: false,
    data: undefined,
  },
  chatViewers: {
    fetching: false,
    fetched: false,
    data: undefined,
  },
  chatMods: {
    fetching: false,
    fetched: false,
    data: undefined,
  },
  streams: {
    fetching: false,
    fetched: false,
    data: undefined,
  },
};

export default function (
  state = initialState,
  action: MixerActionTypes
): MixerState {
  switch (action.type) {
    case GET_MIXER_USER_PENDING:
      return {
        ...state,
        user: {
          ...state.user,
          fetching: true,
        },
      };
    case GET_MIXER_USER_FULFILLED:
      return {
        ...state,
        user: {
          fetching: false,
          fetched: true,
          data: action.payload,
        },
      };
    case GET_MIXER_USER_REJECTED:
      return {
        ...state,
        user: {
          fetching: false,
          fetched: false,
          errors: action.payload,
        },
      };
    case GET_MIXER_CHAT_HISTORY_PENDING:
      return {
        ...state,
        chat: {
          ...state.chat,
          fetching: true,
        },
      };
    case GET_MIXER_CHAT_HISTORY_FULFILLED:
      return {
        ...state,
        chat: {
          fetching: false,
          fetched: true,
          data: action.payload,
        },
      };
    case GET_MIXER_CHAT_HISTORY_REJECTED:
      return {
        ...state,
        chat: {
          fetching: false,
          fetched: false,
        },
      };
    case UPDATE_MIXER_CHAT:
      return {
        ...state,
        chat: {
          ...state.chat,
          data: [action.payload],
        },
      };
    case GET_MIXER_CHAT_CLIENT_PENDING:
      return {
        ...state,
        chat: {
          ...state.chat,
          fetching: true
        },
      };
    case GET_MIXER_CHAT_CLIENT_FULFILLED:
      return {
        ...state,
        chatClient: {
          ...state.chatClient,
          fetching: false,
          fetched: true,
          data: action.payload
        },
      };
    case GET_MIXER_CHAT_CLIENT_REJECTED:
      return {
        ...state,
        chatClient: {
          ...state.chatClient,
          fetching: false,
          fetched: false,
        },
      };
    case GET_MIXER_STREAMS_PENDING:
      return {
        ...state,
        streams: {
          ...state.streams,
          fetching: true,
        },
      };
    case GET_MIXER_STREAMS_FULFILLED:
      return {
        ...state,
        streams: {
          ...state.streams,
          fetching: false,
          fetched: true,
          data: action.payload,
        },
      };
    case GET_MIXER_STREAMS_REJECTED:
      return {
        ...state,
        streams: {
          ...state.streams,
          fetching: false,
          fetched: false,
        },
      };
    case GET_MIXER_MOD_LIST_PENDING:
      return {
        ...state,
        chatMods: {
          ...state.chatMods,
          fetching: true,
        },
      };
    case GET_MIXER_MOD_LIST_FULFILLED:
      return {
        ...state,
        chatMods: {
          ...state.chatMods,
          fetching: false,
          fetched: true,
          data: action.payload,
        },
      };
    case GET_MIXER_MOD_LIST_REJECTED:
      return {
        ...state,
        chatMods: {
          ...state.chatMods,
          fetching: false,
          fetched: false,
        },
      };
    case GET_MIXER_VIEWERS_PENDING:
      return {
        ...state,
        chatViewers: {
          ...state.chatViewers,
          fetching: true,
        },
      };
    case GET_MIXER_VIEWERS_FULFILLED:
      return {
        ...state,
        chatViewers: {
          ...state.chatViewers,
          fetching: false,
          fetched: true,
          data: action.payload,
        },
      };
    case GET_MIXER_VIEWERS_REJECTED:
      return {
        ...state,
        chatViewers: {
          ...state.chatViewers,
          fetching: false,
          fetched: false,
        },
      };
    default:
      return state;
  }
}
