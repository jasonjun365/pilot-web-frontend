import createActions from '@/store/createActions';
import name from './name';

export default createActions(name, [
  'setLoading',
  'setSearchForm',
]);