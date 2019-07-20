import { combineReducers } from 'redux';
import authReducer from './authReducer';
import mixerReducer from './mixerReducer';

export default combineReducers({
  auth: authReducer,
  mixer: mixerReducer,
});