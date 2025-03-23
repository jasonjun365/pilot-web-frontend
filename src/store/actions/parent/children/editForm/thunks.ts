import createAsyncThunks from '@/store/createAsyncThunks';
import name from './name';

export default createAsyncThunks(name, [[
  'addStudent', {
    url: '/api/v1/app/student/create',
    method: 'post',
  }], [
  'editStudent', {
    url: '/api/v1/app/student/update',
    method: 'put',
  }]
]);