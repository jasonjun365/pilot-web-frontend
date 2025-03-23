import createAsyncThunks from '@/store/createAsyncThunks';
import name from './name';

export default createAsyncThunks(name, [[
  'getData', {
    // url: '/list.json',
    url: ({ username }) => `/api/v1/u/info/${username}`,
    method: 'get',
  }], [
  'login', {
    url: '/api/v1/u/login',
    method: 'post',
  }], [
  'logout', {
    url: '/api/v1/u/logout',
    method: 'post',
  }], [
  'signup', {
    url: '/api/v1/u/save',
    method: 'post',
  }]
]);