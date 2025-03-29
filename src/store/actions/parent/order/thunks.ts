import createAsyncThunks from '@/store/createAsyncThunks';
import name from './name';

export default createAsyncThunks(name, [[
  'getOrder', {
    url: ({ oid }) => `/api/v1/app/order/${oid}`,
    method: 'get',
  }], [
  'getOrderList', {
    url: '/api/v1/app/order',
    method: 'get',
  }], [
  'payOrder', {
    url: ({ oid }) => `/api/v1/app/order/${oid}`,
    method: 'put',
  }]
]);