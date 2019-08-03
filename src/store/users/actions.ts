import axios from 'axios';
import {
  UserActionTypes,
  IUser,
  REQEUST_USERS,
  RECIEVE_USERS,
  REJECT_USERS,
} from './types';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '..';

export function requestUsers(): UserActionTypes {
  return {
    type: REQEUST_USERS,
  }
}

export function recieveUsers(users: IUser[]): UserActionTypes {
  return {
    type: RECIEVE_USERS,
    payload: users
  }
}

export function rejectUsers(): UserActionTypes {
  return {
    type: REJECT_USERS,
  }
}

export const fetchUsers = (): ThunkAction<void, AppState, null, UserActionTypes> => async (dispatch) => {
  dispatch(requestUsers());
  try {
    const { data } = await axios.get('/api/auth/users');
    dispatch(recieveUsers(data))
  } catch (error) {
    const { data } = error.response;
    dispatch(rejectUsers());
  }
}