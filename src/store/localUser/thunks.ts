import axios from 'axios';
import cookie from 'cookie';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '..';
import { ILocalUser, LocalUserActionTypes } from './types';
import {
  createLocalUser,
  createLocalUserSuccess,
  createLocalUserFailure,
  getLocalUser,
  getLocalUserSuccess,
  getLocalUserFailure,
  loginLocalUser,
  loginLocalUserSuccess,
  loginLocalUserFailure,
  logoutLocalUser
} from './actions';

export const thunkCreateLocalUser = (
  localUser: ILocalUser
): ThunkAction<void, AppState, null, LocalUserActionTypes> => async (dispatch) => {
  dispatch(createLocalUser());
  try {
    const { data } = await axios.post('/api/auth/local/', localUser);
    dispatch(createLocalUserSuccess(data));
  } catch (err) {
    const { data } = err.response;
    dispatch(createLocalUserFailure(data));
  }
};

export const thunkGetLocalUser = (): ThunkAction<void, AppState, null, LocalUserActionTypes> => async (dispatch) => {
  dispatch(getLocalUser());
  try {
    const { data } = await axios.get('/api/auth/local/current');
    dispatch(getLocalUserSuccess(data));
  } catch (err) {
    const { data } = err.response
    dispatch(getLocalUserFailure(data));
  }
};

export const thunkLoginLocalUser = (
  localUser: ILocalUser
): ThunkAction<void, AppState, null, LocalUserActionTypes> => async (dispatch) => {
  dispatch(loginLocalUser());
  try {
    const { data } = await axios.post('/api/auth/local/login', localUser);
    dispatch(loginLocalUserSuccess(data));
  } catch (err) {
    const { data } = err.response;
    dispatch(loginLocalUserFailure(data));
  }
};

export const thunkLogoutLocalUser = (): ThunkAction<void, AppState, null, LocalUserActionTypes> => async (dispatch) => {
  document.cookie = cookie.serialize('token2', '');
  dispatch(logoutLocalUser());
};
