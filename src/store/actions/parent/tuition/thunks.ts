import createAsyncThunks from '@/store/createAsyncThunks';
import name from './name';

export default createAsyncThunks(name, [[
  'getData', {
    url: '/api/v1/parent/tuition/list',
    method: 'get',
  }],
]);