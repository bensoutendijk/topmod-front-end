const initialState = {
  fetching: false,
  fetched: false,
  user: undefined,
  errors: undefined,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'GET_USER_PENDING':
      return {
        ...state,
        fetching: true,
      };
    case 'GET_USER_FULFILLED':
      return {
        ...state,
        fetching: false,
        fetched: true,
        user: action.payload,
      };
    case 'GET_USER_REJECTED':
      return {
        ...state,
        fetching: false,
        errors: action.payload,
      };
    case 'LOGIN_USER_PENDING':
      return {
        ...state,
        fetching: true,
      };
    case 'LOGIN_USER_FULFILLED':
      return {
        ...state,
        fetching: false,
        fetched: true,
        user: action.payload,
      };
    case 'LOGIN_USER_REJECTED':
      return {
        ...state,
        fetching: false,
        errors: action.payload,
      };
    case 'CREATE_USER_PENDING':
      return {
        ...state,
        fetching: true,
      };
    case 'CREATE_USER_FULFILLED':
      return {
        ...state,
        fetching: false,
        fetched: true,
        user: action.payload,
      };
    case 'CREATE_USER_REJECTED':
      return {
        ...state,
        fetching: false,
        errors: action.payload,
      };
    case 'LOGOUT_USER':
      return {
        ...state,
        fetched: false,
        user: undefined,
      };
    default:
      return state;
  }
}
