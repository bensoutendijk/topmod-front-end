import axios from 'axios';

export const getMixerUser = () => async (dispatch) => {
  dispatch({ type: 'GET_MIXER_PENDING' });
  try {
    const { data } = await axios.get('/api/auth/mixer/current');
    dispatch({ type: 'GET_MIXER_FULFILLED', payload: data });
  } catch (err) {
    dispatch({ type: 'GET_MIXER_REJECTED' });
  }
};

export const getMixerChatHistory = () => async (dispatch) => {
  dispatch({ type: 'GET_MIXER_CHAT_HISTORY_PENDING' });
  try {
    const { data } = await axios.get('/api/chat/mixer/history');
    dispatch({ type: 'GET_MIXER_CHAT_HISTORY_FULFILLED', payload: data });
  } catch (err) {
    dispatch({ type: 'GET_MIXER_CHAT_HISTORY_REJECTED' });
  }
};

export const getMixerChat = () => async (dispatch) => {
  dispatch({ type: 'GET_MIXER_CHAT_PENDING' });
  try {
    const { data } = await axios.get('/api/chat/mixer');
    await dispatch({ type: 'GET_MIXER_CHAT_FULFILLED', payload: data });
  } catch (err) {
    dispatch({ type: 'GET_MIXER_CHAT_REJECTED' });
  }
};

export const updateMixerChat = chatEvent => async (dispatch) => {
  dispatch({ type: 'UPDATE_MIXER_CHAT_PENDING' });
  try {
    dispatch({ type: 'UPDATE_MIXER_CHAT_FULFILLED', payload: chatEvent });
  } catch (err) {
    dispatch({ type: 'UPDATE_MIXER_CHAT_REJECTED' });
  }
};

export const getMixerStreams = () => async (dispatch) => {
  dispatch({ type: 'GET_MIXER_STREAMS_PENDING' });
  try {
    const { data } = await axios.get('/api/analytics/mixer/streams');
    dispatch({ type: 'GET_MIXER_STREAMS_FULFILLED', payload: data });
  } catch (err) {
    dispatch({ type: 'GET_MIXER_STREAMS_REJECTED' });
  }
};

export const getMixerModList = () => async (dispatch) => {
  dispatch({ type: 'GET_MIXER_MOD_LIST_PENDING' });
  try {
    const { data } = await axios.get('/api/analytics/mixer/users/mod');
    dispatch({ type: 'GET_MIXER_MOD_LIST_FULFILLED', payload: data });
  } catch (err) {
    dispatch({ type: 'GET_MIXER_MOD_LIST_REJECTED' });
  }
};

export const getMixerViewers = (dateFrom, dateTo) => async (dispatch) => {
  dispatch({ type: 'GET_MIXER_VIEWERS_PENDING' });
  try {
    const { data } = await axios.get(`/api/analytics/mixer/viewers?from=${dateFrom}&to=${dateTo}`);
    if (data.statusCode === 403) {
      throw new Error('Mixer Action Error');
    }
    dispatch({ type: 'GET_MIXER_VIEWERS_FULFILLED', payload: data });
  } catch (err) {
    dispatch({ type: 'GET_MIXER_VIEWERS_REJECTED' });
  }
};
