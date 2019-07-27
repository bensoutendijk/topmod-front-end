import { combineReducers } from 'redux';
import localUserReducer from './localUserReducer';
import mixerReducer from './mixerReducer';
import filtersReducer from './filtersReducer';

export default combineReducers({
  localUser: localUserReducer,
  mixer: mixerReducer,
  filters: filtersReducer,
});
