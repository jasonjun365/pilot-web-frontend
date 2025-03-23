import createAsyncThunks from '@/store/createAsyncThunks';
import name from './name';

export default createAsyncThunks(name, [[
  'submit', {
    url: ({ cid }) => `/api/v1/manage/user/${cid}`,
    method: 'delete',
  }]
]);