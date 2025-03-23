import createAsyncThunks from '@/store/createAsyncThunks';
import name from './name';

export default createAsyncThunks(name, [[
  'addUser', {
    url: '/api/v1/sys/user/save',
    method: 'post',
  }], [
  'editUser', {
    url: '/api/v1/sys/user/update',
    method: 'put',
  }]
]);