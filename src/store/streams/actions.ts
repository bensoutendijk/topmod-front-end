import axios from 'axios';
import {
  StreamsActionTypes,
  IStream,
  REQEUST_STREAMS,
  RECIEVE_STREAMS,
  REJECT_STREAMS,
} from './types';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '..';

export function requestStreams(): StreamsActionTypes {
  return {
    type: REQEUST_STREAMS,
  }
}

export function recieveStreams(users: IStream[]): StreamsActionTypes {
  return {
    type: RECIEVE_STREAMS,
    payload: users
  }
}

export function rejectStreams(): StreamsActionTypes {
  return {
    type: REJECT_STREAMS,
  }
}

export const fetchStreams = (provider: string, username: string): ThunkAction<void, AppState, null, StreamsActionTypes> => async (dispatch) => {
  dispatch(requestStreams());
  try {
    const { data } = await axios.get(`/api/services/${provider}/${username}/streams`);
    dispatch(recieveStreams(data))
  } catch (error) {
    dispatch(rejectStreams());
  }
}

export const fetchStream = (streamId: string): ThunkAction<void, AppState, null, StreamsActionTypes> => async (dispatch) => {
  dispatch(requestStreams());
  try {
    const { data } = await axios.get(`/api/streams/${streamId}`);
    dispatch(recieveStreams(data))
  } catch (error) {
    dispatch(rejectStreams());
  }
}