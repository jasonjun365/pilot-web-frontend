import { combineReducers } from '@reduxjs/toolkit';
import dict from './dict';
import user from './user';
import menu from './menu';
import toast from './toast';
import light from './light';
import hashtag from './hashtag';

export default combineReducers({
  dict,
  user,
  menu,
  toast,
  light,
  hashtag,
});
