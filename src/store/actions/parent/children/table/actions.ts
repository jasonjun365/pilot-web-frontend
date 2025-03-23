import createActions from '@/store/createActions';
import name from './name';

export default createActions(name, [
  'setTableReload',
  'setSearchForm',
  'setSelectValue',
  'appendDataToList',
  'updateDataToList'
]);