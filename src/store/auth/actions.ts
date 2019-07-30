import axios from 'axios';

import { 
  ILocalUser,
  AuthError,
  IAuthCredentials,
  AuthActionTypes,
  RECIEVE_AUTH,
  REQUEST_AUTH,
  REJECT_AUTH,
} from './types';

import { ThunkAction } from 'redux-thunk';
import { AppState } from '..';

export const requestAuth = (): AuthActionTypes => {
  return {
    type: REQUEST_AUTH
  }
}

export const recieveAuth = (payload: ILocalUser): AuthActionTypes => {
  return {
    type: RECIEVE_AUTH,
    payload
  }
}

export const rejectAuth = (payload: AuthError): AuthActionTypes => {
  return {
    type: REJECT_AUTH,
    payload
  }
}

export const fetchUser = (): ThunkAction<void, AppState, null, AuthActionTypes> => async (dispatch) => {
  dispatch(requestAuth());
  try {
    const { data } = await axios.get('/api/auth/local/current');
    dispatch(recieveAuth(data))
  } catch (error) {
    const { data } = error.response;
    dispatch(rejectAuth(data));
  }
}

export const loginUser = (credentials: IAuthCredentials): ThunkAction<void, AppState, null, AuthActionTypes> => async (dispatch) => {
  dispatch(requestAuth());
  try {
    const { data } = await axios.post('/api/auth/local/login', credentials);
    dispatch(recieveAuth(data))
  } catch (error) {
    const { data } = error.response;
    dispatch(rejectAuth(data));
  }
}

export const createUser = (credentials: IAuthCredentials): ThunkAction<void, AppState, null, AuthActionTypes> => async (dispatch) => {
  dispatch(requestAuth());
  try {
    const { data } = await axios.post('/api/auth/local/', credentials);
    dispatch(recieveAuth(data))
  } catch (error) {
    const { data } = error.response;
    dispatch(rejectAuth(data));
  }
}