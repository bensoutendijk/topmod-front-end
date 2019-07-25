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

export const getMixerModList = () => async (dispatch) => {
  dispatch({ type: 'GET_MIXER_MOD_LIST_PENDING' });
  try {
    const { data } = await axios.get('/api/analytics/mixer/users/mod');
    dispatch({ type: 'GET_MIXER_MOD_LIST_FULFILLED', payload: data });
  } catch (err) {
    dispatch({ type: 'GET_MIXER_MOD_LIST_REJECTED' });
  }
};