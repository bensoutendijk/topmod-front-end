export const GET_LOCAL_USER_PENDING = 'GET_LOCAL_USER_PENDING';
export const GET_LOCAL_USER_FULFILLED = 'GET_LOCAL_USER_FULFILLED';
export const GET_LOCAL_USER_REJECTED = 'GET_LOCAL_USER_REJECTED';
export const LOGIN_LOCAL_USER_PENDING = 'LOGIN_LOCAL_USER_PENDING';
export const LOGIN_LOCAL_USER_FULFILLED = 'LOGIN_LOCAL_USER_FULFILLED';
export const LOGIN_LOCAL_USER_REJECTED = 'LOGIN_LOCAL_USER_REJECTED';
export const CREATE_LOCAL_USER_PENDING = 'CREATE_LOCAL_USER_PENDING';
export const CREATE_LOCAL_USER_FULFILLED = 'CREATE_LOCAL_USER_FULFILLED';
export const CREATE_LOCAL_USER_REJECTED = 'CREATE_LOCAL_USER_REJECTED';
export const LOGOUT_LOCAL_USER = 'LOGOUT_LOCAL_USER';

export type LocalUserPermission = 'admin' | 'tester' | 'default'
export type LocalUserService = 'mixer' | 'twitch' | 'instagram' | 'facebook' | 'twitter'

export interface ILocalUser {
  _id: any
  email: string
  permissions: [LocalUserPermission]
  services: [LocalUserService]
}

export interface ILocalUserErrors {
  user?: 'not authorized' | 'not authenticated'
}

export interface LocalUserState {
  fetched: boolean
  fetching: boolean
  user?: ILocalUser
  errors?: ILocalUserErrors
}

interface CreateLocalUserAction {
  type: typeof CREATE_LOCAL_USER_PENDING
}

interface CreateLocalUserSuccessAction {
  type: typeof CREATE_LOCAL_USER_FULFILLED
  payload: ILocalUser
}

interface CreateLocalUserFailureAction {
  type: typeof CREATE_LOCAL_USER_REJECTED
  payload: ILocalUserErrors
}

interface GetLocalUserAction {
  type: typeof GET_LOCAL_USER_PENDING
}

interface GetLocalUserSuccessAction {
  type: typeof GET_LOCAL_USER_FULFILLED
  payload: ILocalUser
}

interface GetLocalUserFailureAction {
  type: typeof GET_LOCAL_USER_REJECTED
  payload: ILocalUserErrors
}

interface LoginLocalUserAction {
  type: typeof LOGIN_LOCAL_USER_PENDING
}

interface LoginLocalUserSuccessAction {
  type: typeof LOGIN_LOCAL_USER_FULFILLED
  payload: ILocalUser
}

interface LoginLocalUserFailureAction {
  type: typeof LOGIN_LOCAL_USER_REJECTED
  payload: ILocalUserErrors
}

interface LogoutLocalUserAction {
  type: typeof LOGOUT_LOCAL_USER
}

export type LocalUserActionTypes = (
  CreateLocalUserAction |
  CreateLocalUserSuccessAction |
  CreateLocalUserFailureAction |
  GetLocalUserAction |
  GetLocalUserSuccessAction |
  GetLocalUserFailureAction |
  LoginLocalUserAction |
  LoginLocalUserSuccessAction |
  LoginLocalUserFailureAction |
  LogoutLocalUserAction
)