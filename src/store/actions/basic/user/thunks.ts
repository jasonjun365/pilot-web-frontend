import createAsyncThunks from '@/store/createAsyncThunks';
import name from './name';

export default createAsyncThunks(name, [[
  'getData', {
    // url: '/list.json',
    url: ({ username }) => `/api/v1/u/info/${username}`,
    method: 'get',
  }], [
  'signin', {
    url: '/api/v1/u/signin',
    method: 'post',
  }], [
  'signup', {
    url: '/api/v1/u/signup',
    method: 'post',
  }]
]);