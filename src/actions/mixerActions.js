import axios from 'axios';

export const getMixerChatHistory = () => async (dispatch) => {
  dispatch({ type: 'GET_MIXER_CHAT_PENDING' });
  try {
    const { data } = await axios.get('/api/chat/mixer/history');
    dispatch({ type: 'GET_MIXER_CHAT_FULFILLED', payload: data });
  } catch (err) {
    dispatch({ type: 'GET_MIXER_CHAT_REJECTED' });
  }
};