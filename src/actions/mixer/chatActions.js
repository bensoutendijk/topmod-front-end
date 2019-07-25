import axios from 'axios';

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