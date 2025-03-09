import createAsyncThunks from '@/store/createAsyncThunks';
import name from './name';

export default createAsyncThunks(name, [[
  'getPrograms', {
    url: '/api/v1/program/list',
    method: 'get',
  }], [
  'getActivities', {
    url: '/api/v1/activity/list',
    method: 'get',
  }]
]);