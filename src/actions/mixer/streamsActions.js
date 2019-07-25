import axios from 'axios';

export const getMixerStreams = () => async (dispatch) => {
  dispatch({ type: 'GET_MIXER_STREAMS_PENDING' });
  try {
    const { data } = await axios.get('/api/analytics/mixer/streams');
    dispatch({ type: 'GET_MIXER_STREAMS_FULFILLED', payload: data });
  } catch (err) {
    dispatch({ type: 'GET_MIXER_STREAMS_REJECTED' });
  }
};