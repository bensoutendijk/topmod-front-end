export const CREATE_USER_PENDING = 'CREATE_USER_PENDING'
export const CREATE_USER_FULFILLED = 'CREATE_USER_FULFILLED'
export const CREATE_USER_REJECTED = 'CREATE_USER_REJECTED'
export const GET_USER_PENDING = 'GET_USER_PENDING'
export const GET_USER_FULFILLED = 'GET_USER_FULFILLED'
export const GET_USER_REJECTED = 'GET_USER_REJECTED'
export const LOGIN_USER_PENDING = 'LOGIN_USER_PENDING'
export const LOGIN_USER_FULFILLED = 'LOGIN_USER_FULFILLED'
export const LOGIN_USER_REJECTED = 'LOGIN_USER_REJECTED'
export const LOGOUT_USER = 'LOGOUT_USER'

export type LocalUserPermission = 'admin' | 'tester' | 'default'
export type LocalUserService = 'mixer' | 'twitch' | 'instagram' | 'facebook' | 'twitter'

export interface ILocalUser {
  _id: any
  email: string
  permissions: [LocalUserPermission]
  services: [LocalUserService]
}

export interface ILocalUserErrors {
  user: 'not authorized' | 'not authenticated'
}

export interface ILocalUserState {
  fetched: boolean
  fetching: boolean
  user: ILocalUser
  errors: ILocalUserErrors
}