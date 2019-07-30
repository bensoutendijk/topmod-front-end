import { SystemActionTypes, UPDATE_LOADED } from './types';

export function updateLoaded(payload: boolean): SystemActionTypes {
  return {
    type: UPDATE_LOADED,
    payload
  }
}