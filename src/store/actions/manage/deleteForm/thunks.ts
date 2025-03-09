import createAsyncThunks from '@/store/createAsyncThunks';
import name from './name';

export default createAsyncThunks(name, [[
  'submit', {
    url: '/u/live/manage/streams',
    method: 'delete',
  }]
]);