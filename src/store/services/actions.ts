import axios from 'axios';
import {
  ServicesActionTypes,
  IService,
  REQUEST_SERVICES,
  RECIEVE_SERVICES,
  REJECT_SERVICES,
} from './types';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '..';

export function requestUsers(): ServicesActionTypes {
  return {
    type: REQUEST_SERVICES,
  }
}

export function recieveUsers(users: IService[]): ServicesActionTypes {
  return {
    type: RECIEVE_SERVICES,
    payload: users
  }
}

export function rejectUsers(): ServicesActionTypes {
  return {
    type: REJECT_SERVICES,
  }
}

export const fetchServices = (): ThunkAction<void, AppState, null, ServicesActionTypes> => async (dispatch) => {
  dispatch(requestUsers());
  try {
    const { data } = await axios.get('/api/services');
    dispatch(recieveUsers(data))
  } catch (error) {
    dispatch(rejectUsers());
  }
}

export const fetchService = (provider: string, username: string): ThunkAction<void, AppState, null, ServicesActionTypes> => async (dispatch) => {
  dispatch(requestUsers());
  try {
    const { data } = await axios.get(`/api/services/${provider}/${username}`);
    dispatch(recieveUsers(data))
  } catch (error) {
    dispatch(rejectUsers());
  }
}