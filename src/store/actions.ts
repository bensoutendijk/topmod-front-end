import {
  ASyncActionTypes,
  SET_FETCHED,
  SET_FETCHING,
} from './types';

export function setFetched(payload: boolean): ASyncActionTypes {
  return {
    type: SET_FETCHED,
    payload,
  }
}

export function setFetching(payload: boolean): ASyncActionTypes {
  return {
    type: SET_FETCHING,
    payload,
  }
}