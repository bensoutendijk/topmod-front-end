const initialState = {
  dateRange: {
    dateFrom: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000),
    dateTo: new Date(),
  },
};

export function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_DATE_FROM':
      return {
        ...state,
        dateRange: {
          ...state.dateRange,
          dateFrom: action.payload,
        },
      };
    case 'UPDATE_DATE_TO':
      return {
        ...state,
        dateRange: {
          ...state.dateRange,
          dateTo: action.payload,
        },
      };
    default:
      return state;
  }
}
