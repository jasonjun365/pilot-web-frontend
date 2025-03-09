import createAsyncThunks from '@/store/createAsyncThunks';
import name from './name';

export default createAsyncThunks(name, [[
  'addStudent', {
    url: '/api/v1/parent/children',
    method: 'post',
  }], [
  'editStudent', {
    url: '/api/v1/parent/children',
    method: 'put',
  }]
]);