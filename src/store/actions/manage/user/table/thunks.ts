import createAsyncThunks from '@/store/createAsyncThunks';
import name from './name';

export default createAsyncThunks(name, [[
  'getData', {
    url: '/api/v1/sys/user/list',
    method: 'get',
  }],
]);