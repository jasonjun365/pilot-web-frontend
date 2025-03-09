import createAsyncThunks from '@/store/createAsyncThunks';
import name from './name';

export default createAsyncThunks(name, [[
  'getOrder', {
    url: ({ oid }) => `/api/v1/order/${oid}`,
    method: 'get',
  }], [
  'getOrderList', {
    url: '/api/v1/order',
    method: 'get',
  }]
]);