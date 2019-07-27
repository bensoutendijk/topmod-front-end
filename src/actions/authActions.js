import axios from 'axios';
import cookie from 'cookie';

export const createUser = user => async (dispatch) => {
  dispatch({ type: 'CREATE_USER_PENDING' });
  try {
    const { data } = await axios.post('/api/auth/local/', user);
    dispatch({ type: 'CREATE_USER_FULFILLED', payload: data });
  } catch (err) {
    const { data } = err.response;
    dispatch({ type: 'CREATE_USER_REJECTED', payload: data });
  }
};

export const getUser = () => async (dispatch) => {
  dispatch({ type: 'GET_USER_PENDING' });
  try {
    const { data } = await axios.get('/api/auth/local/current');
    dispatch({ type: 'GET_USER_FULFILLED', payload: data });
  } catch (err) {
    dispatch({ type: 'GET_USER_REJECTED', payload: err.response.data });
  }
};

export const loginUser = user => async (dispatch) => {
  dispatch({ type: 'LOGIN_USER_PENDING' });
  try {
    const { data } = await axios.post('/api/auth/local/login', user);
    dispatch({ type: 'LOGIN_USER_FULFILLED', payload: data });
  } catch (err) {
    const { data } = err.response;
    dispatch({ type: 'LOGIN_USER_REJECTED', payload: data });
  }
};

export const logoutUser = () => async (dispatch) => {
  document.cookie = cookie.serialize('token2', null);
  dispatch({ type: 'LOGOUT_USER', payload: null });
};
