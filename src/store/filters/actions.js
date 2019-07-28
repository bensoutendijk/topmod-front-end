export const updateDateFrom = date => async (dispatch) => {
  dispatch({ type: 'UPDATE_DATE_FROM', payload: date });
};

export const updateDateTo = date => async (dispatch) => {
  dispatch({ type: 'UPDATE_DATE_TO', payload: date });
};
