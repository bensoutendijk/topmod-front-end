export const SET_FETCHING = 'SET_FETCHING';
export const SET_FETCHED = 'SET_FECTED';

interface SetFetching {
  type: typeof SET_FETCHING;
  payload: boolean;
}

interface SetFetched {
  type: typeof SET_FETCHED;
  payload: boolean
}

export interface ASyncState {
  fetched: boolean;
  fetching: boolean;
}

export type ASyncActionTypes = (
  SetFetched |
  SetFetching
)