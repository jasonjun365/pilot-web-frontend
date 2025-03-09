import createAsyncThunks from '@/store/createAsyncThunks';
import name from './name';

export default createAsyncThunks(name, [[
  'postWithdrawal', {
    url: '/api/v1/withdrawal',
    method: 'post',
  }]
]);