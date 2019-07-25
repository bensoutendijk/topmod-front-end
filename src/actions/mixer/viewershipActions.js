import axios from 'axios';

export const getMixerViewers = () => async (dispatch, getState) => {
  const state = getState();
  dispatch({ type: 'GET_MIXER_VIEWERS_PENDING' });
  try {
    const { dateFrom, dateTo } = state.filters.dateRange;
    const { data } = await axios.get(`/api/analytics/mixer/viewers?from=${dateFrom.toISOString()}&to=${dateTo.toISOString()}`);
    if (data.statusCode === 403) {
      throw new Error('Mixer Action Error');
    }
    dispatch({ type: 'GET_MIXER_VIEWERS_FULFILLED', payload: data });
  } catch (err) {
    dispatch({ type: 'GET_MIXER_VIEWERS_REJECTED' });
  }
};
