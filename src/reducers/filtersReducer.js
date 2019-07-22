const initialState = {
  dateRange: {
    dateFrom: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
    dateTo: new Date(),
  },
};

export default function (state = initialState, action) {
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
