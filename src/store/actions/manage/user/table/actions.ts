import createActions from '@/store/createActions';
import name from './name';

export default createActions(name, [
  'setSelectValue',
  'appendDataToList',
  'updateDataToList'
]);