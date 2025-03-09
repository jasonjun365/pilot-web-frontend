import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import StyleWrap from './StyleWrap';
import Actions from '@/store/actions';

const {
  actions: thisActions,
} = Actions.basic.menu;

const Menu: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const thisState = useSelector((state: any) => state.basic.menu);

  const states = {
    data: thisState.data,
    allParent: thisState.allParent,
    current: thisState.current,
    inLive: thisState.inLive,
  };

  const methods = {
    handleClick: (path: string) => {
      if (location.pathname !== path) {
        navigate(path);
      }
    }
  };

  useEffect(() => {
    const path = location.pathname;
    if (path !== thisState.current) {
      const hasTab = thisState.tabs.findIndex((it: any) => it === path) > -1;
      const method = hasTab ? 'openTab' : 'addTab';
      dispatch(thisActions.setPathMatchScrollTop({ path: thisState.current, value: document.documentElement.scrollTop || 0 }));
      dispatch(thisActions[method](path));
      if (!thisState.tabsOpen.includes(path)) {
        dispatch(thisActions.addTabsOpen(path));
      }
    }
  }, [location.pathname]);

  return (
    <StyleWrap
      {...states}
      {...methods}
    />
  );
};

export default Menu;