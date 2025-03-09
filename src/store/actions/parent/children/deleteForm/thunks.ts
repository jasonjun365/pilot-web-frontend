import createAsyncThunks from '@/store/createAsyncThunks';
import name from './name';

export default createAsyncThunks(name, [[
  'submit', {
    url: ({ cid }) => `/api/v1/parent/children/${cid}`,
    method: 'delete',
  }]
]);