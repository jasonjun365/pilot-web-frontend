import React from 'react';
import TabPanel from './TabPanel';

interface PropTypes { // states
  allPath: string[]
  tabs: string[]
  tabsOpen: string[]
  pathMatchScrollTop: any
  current: string
}

const Main: React.FC<PropTypes> = ({ tabs, ...props }) => {
  const filterTabs = tabs.filter((it: string) => it !== 'deleteTab');

  return (
    <>
      {filterTabs.map((t, i) => (
        <TabPanel
          {...props}
          value={t}
          key={i}
        />
      ))}
    </>
  );
};

export default Main;
