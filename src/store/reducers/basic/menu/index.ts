import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { getPathname } from '@/libs/utils/index';
import transData from './transData';
import MenuPropTypes from './interface/MenuPropTypes';
import space from './space';

const {
  actions
} = space;

const initialPathname = getPathname();

localStorage.setItem('tabs', initialPathname);

interface PropTypes {
  data: MenuPropTypes[]
  pathMatchName: any
  pathMatchScrollTop: any
  allPath: string[]
  current: string
  tabsOpen: string[]
  tabs: string[]
  loading: boolean
  open: boolean
  inLive: {
    rtmpMux: boolean,
    rtmpWowza: boolean
    rtmpWowzaUHD: boolean,
    webcam: boolean,
    webcamLive: boolean,
  }
}

const initialState: PropTypes = {
  data: [],
  pathMatchName: {},
  pathMatchScrollTop: {},
  allPath: [],
  tabs: [initialPathname],
  tabsOpen: [initialPathname],
  current: initialPathname,
  loading: false,
  open: !localStorage.getItem('menuIsOpen') ? true : localStorage.getItem('menuIsOpen') === 'false' ? false : true,
  inLive: {
    rtmpMux: false,
    rtmpWowza: false,
    rtmpWowzaUHD: false,
    webcam: false,
    webcamLive: false,
  }
};

const data = createReducer(
  initialState,
  builder => { builder
    .addCase(actions.setData, (state, action: PayloadAction<any>) => {
      const result = transData(action.payload);
      for (let attr in result) {
        if (state.hasOwnProperty(attr)) {
          // @ts-ignore
          state[attr] = result[attr];
        }
      }
    })
    .addCase(actions.addTab, (state, action: PayloadAction<string>) => {
      const tabs = state.tabs.concat(action.payload).filter(t => t);
      state.tabs = tabs;
      state.current = action.payload;
      localStorage.setItem('tabs', tabs.join(','));
    })
    .addCase(actions.openTab, (state, action: PayloadAction<string>) => {
      state.current = action.payload;
    })
    .addCase(actions.removeTab, (state, action: PayloadAction<string>) => {
      const newTabs = state.tabs.map(t => t === action.payload ? 'deleteTab' : t);
      state.tabs = newTabs;
      localStorage.setItem('tabs', newTabs.join(','));
    })
    .addCase(actions.closeOtherTab, (state) => {
      const path = getPathname();
      const newTabs = state.tabs.map(t => t === path ? t : 'deleteTab');
      state.tabs = newTabs;
      localStorage.setItem('tabs', newTabs.join(','));
    })
    .addCase(actions.closeAllTab, (state) => {
      const newTabs = state.tabs.map(() => 'deleteTab');
      state.tabs = newTabs;
      state.current = '/';
      localStorage.setItem('tabs', newTabs.join(','));
    })
    .addCase(actions.setPathMatchScrollTop, (state, action: PayloadAction<any>) => {
      state.pathMatchScrollTop[action.payload.path] = action.payload.value;
    })
    .addCase(actions.addTabsOpen, (state, action: PayloadAction<string>) => {
      state.tabsOpen = state.tabsOpen.concat(action.payload);
    })
    .addCase(actions.show, (state) => {
      state.open = true;
      localStorage.setItem('menuIsOpen', 'true');
    })
    .addCase(actions.hide, (state) => {
      state.open = false;
      localStorage.setItem('menuIsOpen', 'false');
    })
    .addCase(actions.setInLive, (state, action: PayloadAction<object>) => {
      state.inLive = {...state.inLive, ...action.payload};
    });
  }
);

export default data;
