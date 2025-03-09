import createAsyncThunks from '@/store/createAsyncThunks';
import name from './name';

export default createAsyncThunks(name, [[
  'postPayment', {
    url: '/api/v1/payment',
    method: 'post',
  }]
]);