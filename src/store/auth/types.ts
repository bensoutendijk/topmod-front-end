export const REQUEST_AUTH = 'REQUEST_AUTH';
export const RECIEVE_AUTH = 'RECIEVE_AUTH';
export const REJECT_AUTH = 'REJECT_AUTH'

export type AuthError = 'not authenticated' | 'not authorized'
export type AuthPermission = 'admin' | 'tester' | 'default'
export type AuthService = 'mixer' | 'twitch' | 'instagram' | 'facebook' | 'twitter'

export interface AuthState {
  fetched: boolean;
  fetching: boolean;
  user?: ILocalUser;
  error?: AuthError
}

export interface ILocalUser {
  _id: any;
  email: string;
  permissions: AuthPermission[];
  services: AuthService[];
}

export interface IAuthCredentials {
  email: string;
  password: string;
  passwordConfirmation?: string;
}

interface RequestAuth {
  type: typeof REQUEST_AUTH;
}

interface RecieveAuth {
  type: typeof RECIEVE_AUTH;
  payload: ILocalUser;
}

interface RejectAuth {
  type: typeof REJECT_AUTH;
  payload: AuthError
}

export type AuthActionTypes = (
  RequestAuth |
  RecieveAuth |
  RejectAuth
)