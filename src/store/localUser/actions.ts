import {
  LocalUserActionTypes,
  ILocalUser,
  ILocalUserErrors,
  CREATE_LOCAL_USER_PENDING,
  CREATE_LOCAL_USER_FULFILLED,
  CREATE_LOCAL_USER_REJECTED,
  GET_LOCAL_USER_PENDING,
  GET_LOCAL_USER_FULFILLED,
  GET_LOCAL_USER_REJECTED,
  LOGIN_LOCAL_USER_PENDING,
  LOGIN_LOCAL_USER_FULFILLED,
  LOGIN_LOCAL_USER_REJECTED,
  LOGOUT_LOCAL_USER,
} from "./types";

export function createLocalUser(): LocalUserActionTypes {
  return {
    type: CREATE_LOCAL_USER_PENDING
  }
}

export function createLocalUserSuccess(localUser: ILocalUser): LocalUserActionTypes {
  return {
    type: CREATE_LOCAL_USER_FULFILLED,
    payload: localUser
  }
}

export function createLocalUserFailure(errors: ILocalUserErrors): LocalUserActionTypes {
  return {
    type: CREATE_LOCAL_USER_REJECTED,
    payload: errors
  }
}

export function getLocalUser(): LocalUserActionTypes {
  return {
    type: GET_LOCAL_USER_PENDING
  }
}

export function getLocalUserSuccess(localUser: ILocalUser): LocalUserActionTypes {
  return {
    type: GET_LOCAL_USER_FULFILLED,
    payload: localUser
  }
}

export function getLocalUserFailure(errors: ILocalUserErrors): LocalUserActionTypes {
  return {
    type: GET_LOCAL_USER_REJECTED,
    payload: errors
  }
}

export function loginLocalUser(): LocalUserActionTypes {
  return {
    type: LOGIN_LOCAL_USER_PENDING
  }
}

export function loginLocalUserSuccess(localUser: ILocalUser): LocalUserActionTypes {
  return {
    type: LOGIN_LOCAL_USER_FULFILLED,
    payload: localUser
  }
}

export function loginLocalUserFailure(errors: ILocalUserErrors): LocalUserActionTypes {
  return {
    type: LOGIN_LOCAL_USER_REJECTED,
    payload: errors
  }
}

export function logoutLocalUser(): LocalUserActionTypes {
  return {
    type: LOGOUT_LOCAL_USER
  }
}