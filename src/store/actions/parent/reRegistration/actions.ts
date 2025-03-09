import createActions from '@/store/createActions';
import name from './name';

export default createActions(name, [
  'setLoading',
  'setConfirmDialog',
  'setStudentsData',
  'setProgramsData',
  'setActivitiesData',
  'setStudentOptionData',
  'setProgramOptionData',
  'setActivityOptionData',
  'setFormInitialValues',
  'setFormData',
]);