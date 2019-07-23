export default function (state = {}, action) {
  switch (action.type) {
    case 'GET_USER_PENDING':
      return {
        fetching: true, fetched: false, user: null, errors: false,
      };
    case 'GET_USER_FULFILLED':
      return {
        fetching: false, fetched: true, ...action.payload, errors: false,
      };
    case 'GET_USER_REJECTED':
      return {
        fetching: false, fetched: false, user: null, errors: true,
      };
    case 'LOGIN_USER_PENDING':
      return {
        fetching: true, fetched: false, user: null, errors: false,
      };
    case 'LOGIN_USER_FULFILLED':
      return {
        fetching: false, fetched: true, ...action.payload, errors: false,
      };
    case 'LOGIN_USER_REJECTED':
      return {
        fetching: false, fetched: false, user: null, ...action.payload,
      };
    case 'LOGOUT_USER_PENDING':
      return {
        fetching: true, fetched: false, user: null, errors: false,
      };
    case 'LOGOUT_USER_FULFILLED':
      return {
        fetching: false, fetched: false, ...action.payload, errors: false,
      };
    case 'LOGOUT_USER_REJECTED':
      return {
        fetching: false, fetched: false, user: null, ...action.payload,
      };
    case 'CREATE_USER_PENDING':
      return {
        fetching: true, fetched: false, user: null, errors: false,
      };
    case 'CREATE_USER_FULFILLED':
      return {
        fetching: false, fetched: false, ...action.payload, errors: false,
      };
    case 'CREATE_USER_REJECTED':
      return {
        fetching: false, fetched: false, user: null, ...action.payload,
      };
    default:
      return state;
  }
}
