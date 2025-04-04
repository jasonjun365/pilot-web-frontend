import createAsyncThunks from '@/store/createAsyncThunks';
import name from './name';

export default createAsyncThunks(name, [[
  'getTuitionList', {
    url: '/api/v1/app/tuition',
    method: 'get',
  }], [
  'getExportData', {
    url: '/api/v1/app/tuition',
    method: 'get',
  }]
]);