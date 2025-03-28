import createAsyncThunks from '@/store/createAsyncThunks';
import name from './name';

export default createAsyncThunks(name, [[
  'getPrograms', {
    url: '/api/v1/app/program/list',
    method: 'get',
  }], [
  'getActivities', {
    url: '/api/v1/app/activity/list',
    method: 'get',
  }], [
  'getStudents', {
    url: '/api/v1/app/student/list',
    method: 'get',
  }], [
  'postTuition', {
    url: '/api/v1/app/tuition',
    method: 'post',
  }]
]);