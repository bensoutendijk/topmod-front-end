import {
  UserActionTypes,
  IUser,
  UserId,
  ADD_USER,
  UPDATE_USER,
  REMOVE_USER,
} from './types';

export function addUser(user: IUser): UserActionTypes {
  return {
    type: ADD_USER,
    payload: user
  }
}

export function updateUser(user: IUser): UserActionTypes {
  return {
    type: UPDATE_USER,
    payload: user
  }
}

export function removeUser(userId: UserId): UserActionTypes {
  return {
    type: REMOVE_USER,
    payload: userId
  }
}