import createAsyncThunks from '@/store/createAsyncThunks';
import name from './name';

export default createAsyncThunks(name, [[
  'getData', {
    url: '/u/posts/srch/choices',
    method: 'get',
  }]
]);