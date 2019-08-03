export const REQEUST_USERS = 'REQEUST_USERS';
export const RECIEVE_USERS = 'RECIEVE_USERS';
export const REJECT_USERS = 'REJECT_USERS';

export type UserId = string;

export interface IUser {
  _id: UserId;
  data: IMixerData;
}

export interface IMixerData {
  username: string;
  userid: number;
  channelid: number;
}

export interface UserState {
  fetched: boolean
  fetching: boolean
  byId: {
    [key: string]: IUser
  }
  allIds: UserId[]
}

interface RequestUsers {
  type: typeof REQEUST_USERS
}

interface RecieveUsers {
  type: typeof RECIEVE_USERS
  payload: IUser[]
}

interface RejectUsers {
  type: typeof REJECT_USERS
}

export type UserActionTypes = (
  RequestUsers |
  RecieveUsers |
  RejectUsers 
)