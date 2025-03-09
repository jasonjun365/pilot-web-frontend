import React from 'react';
import { useSelector } from 'react-redux';
import View from './View';

const Tabs: React.FC = () => {
  const menuState = useSelector((state: any) => state.basic.menu);

  const states = {
    pathMatchName: menuState.pathMatchName,
    allPath: menuState.allPath,
    tabs: menuState.tabs,
    tabsOpen: menuState.tabsOpen,
    pathMatchScrollTop: menuState.pathMatchScrollTop,
    current: menuState.current,
  };

  return (
    <View
      {...states}
    />
  );
};

export default Tabs;