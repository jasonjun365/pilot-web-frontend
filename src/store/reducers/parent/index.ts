import { combineReducers } from '@reduxjs/toolkit';
import children from './children';
import reRegistration from './reRegistration';
import order from './order';
import withdrawal from './withdrawal';
import payment from './payment';
import tuition from './tuition';

export default combineReducers({
  children,
  reRegistration,
  order,
  withdrawal,
  payment,
  tuition
});
