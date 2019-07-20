const initialState = {
  user: undefined,
  chat: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'GET_MIXER_PENDING':
      return {
        fetching: true, fetched: false, user: null, errors: false,
      };
    case 'GET_MIXER_FULFILLED':
      return {
        fetching: false, fetched: true, ...action.payload, errors: false,
      };
    case 'GET_MIXER_REJECTED':
      return {
        fetching: false, fetched: false, user: null, errors: true,
      };
    case 'CONNECT_MIXER_PENDING':
      return {
        fetching: true, fetched: false, user: null, errors: false,
      };
    case 'CONNECT_MIXER_FULFILLED':
      return {
        fetching: false, fetched: true, ...action.payload, errors: false,
      };
    case 'CONNECT_MIXER_REJECTED':
      return {
        fetching: false, fetched: false, user: null, ...action.payload,
      };
    case 'DISCONNECT_MIXER_PENDING':
      return {
        fetching: true, fetched: false, user: null, errors: false,
      };
    case 'DISCONNECT_MIXER_FULFILLED':
      return {
        fetching: false, fetched: false, ...action.payload, errors: false,
      };
    case 'DISCONNECT_MIXER_REJECTED':
      return {
        fetching: false, fetched: false, user: null, ...action.payload,
      };
    case 'GET_MIXER_CHAT_PENDING':
      return {
        fetching: true, fetched: false, chat: [], errors: false,
      };
    case 'GET_MIXER_CHAT_FULFILLED':
      return {
        fetching: false, fetched: false, chat: action.payload, errors: false,
      };
    case 'GET_MIXER_CHAT_REJECTED':
      return {
        fetching: false, fetched: false, chat: [], ...action.payload,
      };
    default:
      return state;
  }
}