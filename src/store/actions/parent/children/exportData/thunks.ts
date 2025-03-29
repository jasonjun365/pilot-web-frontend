import createAsyncThunks from '@/store/createAsyncThunks';
import name from './name';

export default createAsyncThunks(name, [[
  'getExportData', {
    url: '/api/v1/app/student/export',
    method: 'get',
  }],
]);