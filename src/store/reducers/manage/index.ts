import { combineReducers } from '@reduxjs/toolkit';
import table from './table';
import deleteForm from './deleteForm';

export default combineReducers({
  table,
  deleteForm,
});
