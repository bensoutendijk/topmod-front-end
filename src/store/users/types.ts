import { ASyncState } from "../types";

export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const REMOVE_USER = 'REMOVE_USER';

export type UserId = string;

export interface IUser {
  _id: UserId;
  serviceId: string;
  username: string;
}

export interface UserState extends ASyncState {
  fetched: boolean
  fetching: boolean
  byId: {}
  allIds: UserId[]
}

interface AddUserAction {
  type: typeof ADD_USER
  payload: IUser
}

interface UpdateUserAction {
  type: typeof UPDATE_USER
  payload: IUser
}

interface RemoveUserAction {
  type: typeof REMOVE_USER
  payload: UserId
}

export type UserActionTypes = (
  AddUserAction |
  UpdateUserAction |
  RemoveUserAction 
)