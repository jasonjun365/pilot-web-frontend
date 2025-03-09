import createAsyncThunks from '@/store/createAsyncThunks';
import name from './name';

export default createAsyncThunks(name, [[
  'getData', {
    url: '/u/live/manage/search',
    method: 'get',
  }], [
  'getStatus', {
    url: '/u/live/stream/batch',
    method: 'post',
  }],
]);