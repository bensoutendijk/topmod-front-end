const initialState = {
  user: {
    fetching: false,
    fetched: false,
    data: null,
    errors: false,
  },
  chat: {
    fetching: false,
    fetched: false,
    data: [],
    errors: false,
  },
  chatClient: {
    fetching: false,
    fetched: false,
    data: {},
    errors: false,
  },
  streams: {
    fetching: false,
    fetched: false,
    data: [],
    errors: false,
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'GET_MIXER_PENDING':
      return {
        ...state,
        user: {
          fetching: true,
          fetched: false,
          data: null,
          errors: false,
        },
      };
    case 'GET_MIXER_FULFILLED':
      return {
        ...state,
        user: {
          fetching: false,
          fetched: true,
          data: action.payload,
          errors: false,
        },
      };
    case 'GET_MIXER_REJECTED':
      return {
        ...state,
        user: {
          fetching: false,
          fetched: false,
          data: null,
          errors: true,
        },
      };
    case 'CONNECT_MIXER_PENDING':
      return {
        ...state,
        user: {
          fetching: true,
          fetched: false,
          data: null,
          errors: false,
        },
      };
    case 'CONNECT_MIXER_FULFILLED':
      return {
        ...state,
        user: {
          fetching: false,
          fetched: true,
          data: action.payload,
          errors: false,
        },
      };
    case 'CONNECT_MIXER_REJECTED':
      return {
        ...state,
        user: {
          fetching: false,
          fetched: false,
          data: null,
          errors: true,
        },
      };
    case 'DISCONNECT_MIXER_PENDING':
      return {
        ...state,
        user: {
          fetching: true,
          fetched: false,
          data: null,
          errors: false,
        },
      };
    case 'DISCONNECT_MIXER_FULFILLED':
      return {
        ...state,
        user: {
          fetching: false,
          fetched: true,
          data: action.payload,
          errors: false,
        },
      };
    case 'DISCONNECT_MIXER_REJECTED':
      return {
        ...state,
        user: {
          fetching: false,
          fetched: false,
          data: null,
          errors: true,
        },
      };
    case 'GET_MIXER_CHAT_HISTORY_PENDING':
      return {
        ...state,
        chat: {
          fetching: true,
          fetched: false,
          data: [],
          errors: false,
        },
      };
    case 'GET_MIXER_CHAT_HISTORY_FULFILLED':
      return {
        ...state,
        chat: {
          fetching: false,
          fetched: true,
          data: action.payload,
          errors: false,
        },
      };
    case 'GET_MIXER_CHAT_HISTORY_REJECTED':
      return {
        ...state,
        chat: {
          fetching: false,
          fetched: false,
          data: [],
          errors: true,
        },
      };
    case 'UPDATE_MIXER_CHAT_PENDING':
      return {
        ...state,
        chat: {
          ...state.chat,
        },
      };
    case 'UPDATE_MIXER_CHAT_FULFILLED':
      return {
        ...state,
        chat: {
          ...state.chat,
          data: [...state.chat.data, action.payload],
        },
      };
    case 'UPDATE_MIXER_CHAT_REJECTED':
      return {
        ...state,
        chat: {
          ...state.chat,
        },
      };
    case 'GET_MIXER_CHAT_PENDING':
      return {
        ...state,
        chatClient: {
          fetching: true,
          fetched: false,
          data: {},
          errors: false,
        },
      };
    case 'GET_MIXER_CHAT_FULFILLED':
      return {
        ...state,
        chatClient: {
          fetching: false,
          fetched: true,
          data: action.payload,
          errors: false,
        },
      };
    case 'GET_MIXER_CHAT_REJECTED':
      return {
        ...state,
        chatClient: {
          fetching: false,
          fetched: false,
          data: {},
          errors: true,
        },
      };
    case 'GET_MIXER_STREAMS_PENDING':
      return {
        ...state,
        streams: {
          fetching: true,
          fetched: false,
          data: [],
          errors: false,
        },
      };
    case 'GET_MIXER_STREAMS_FULFILLED':
      return {
        ...state,
        streams: {
          fetching: false,
          fetched: true,
          data: action.payload,
          errors: false,
        },
      };
    case 'GET_MIXER_STREAMS_REJECTED':
      return {
        ...state,
        streams: {
          fetching: false,
          fetched: false,
          data: [],
          errors: true,
        },
      };
    default:
      return state;
  }
}
