import createActions from '@/store/createActions';
import name from './name';

export default createActions(name, [
  'setData',
  'addTab',
  'openTab',
  'removeTab',
  'closeOtherTab',
  'closeAllTab',
  'setPathMatchScrollTop',
  'addTabsOpen',
  'show',
  'hide',
  'setInLive',
]);