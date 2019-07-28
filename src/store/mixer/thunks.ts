import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '..';
import { MixerActionTypes } from './types';
import {
  getMixerUser,
  getMixerUserSuccess,
  getMixerUserFailure,
  getMixerViewers,
  getMixerViewersSuccess,
  getMixerViewersFailure,
  getMixerChatMods,
  getMixerChatModsSuccess,
  getMixerChatModsFailure,
  getMixerChatHistory,
  getMixerChatHistorySuccess,
  getMixerChatHistoryFailure,
  getMixerChatClient,
  getMixerChatClientSuccess,
  getMixerChatClientFailure
} from './actions';


export const thunkGetMixerUser = (): ThunkAction<void, AppState, null, MixerActionTypes> => async (dispatch) => {
  dispatch(getMixerUser());
  try {
    const { data } = await axios.get('/api/auth/mixer/current');
    dispatch(getMixerUserSuccess(data));
  } catch (err) {
    const { data } = err.response
    dispatch(getMixerUserFailure(data));
  }
};

export const thunkGetMixerViewers = (): ThunkAction<void, AppState, null, MixerActionTypes> => async (dispatch) => {
  dispatch(getMixerViewers());
  try {
    const { data } = await axios.get('/api/analytics/chat/viewers');
    dispatch(getMixerViewersSuccess(data));
  } catch (err) {
    dispatch(getMixerViewersFailure());
  }
};

export const thunkGetMixerChatMods = (): ThunkAction<void, AppState, null, MixerActionTypes> => async (dispatch) => {
  dispatch(getMixerChatMods());
  try {
    const { data } = await axios.get('/api/analytics/mixer/users/mod');
    dispatch(getMixerChatModsSuccess(data));
  } catch (err) {
    dispatch(getMixerChatModsFailure());
  }
};

export const thunkGetMixerChatHistory = (): ThunkAction<void, AppState, null, MixerActionTypes> => async (dispatch) => {
  dispatch(getMixerChatHistory());
  try {
    const { data } = await axios.get('/api/chat/mixer/history');
    dispatch(getMixerChatHistorySuccess(data));
  } catch (err) {
    dispatch(getMixerChatHistoryFailure());
  }
};

export const thunkGetMixerChatClient = (): ThunkAction<void, AppState, null, MixerActionTypes> => async (dispatch) => {
  dispatch(getMixerChatClient());
  try {
    const { data } = await axios.get('/api/chat/mixer');
    await dispatch(getMixerChatClientSuccess(data));
  } catch (err) {
    dispatch(getMixerChatClientFailure());
  }
};