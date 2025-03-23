import createAsyncThunks from '@/store/createAsyncThunks';
import name from './name';

export default createAsyncThunks(name, [[
  'submit', {
    url: '/api/v1/app/student/delete',
    method: 'delete',
  }]
]);