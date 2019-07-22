import { combineReducers } from 'redux';
import authReducer from './authReducer';
import mixerReducer from './mixerReducer';
import filtersReducer from './filtersReducer';

export default combineReducers({
  auth: authReducer,
  mixer: mixerReducer,
  filters: filtersReducer,
});
