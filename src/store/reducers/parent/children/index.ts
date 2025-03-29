import { combineReducers } from '@reduxjs/toolkit';
import table from './table';
import deleteForm from './deleteForm';
import editForm from './editForm';
import exportData from './exportData';

export default combineReducers({
  table,
  deleteForm,
  editForm,
  exportData
});
