import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import RenderPage from './RenderPage';

interface PropTypes { // states
  allPath: string[]
  tabsOpen: string[]
  pathMatchScrollTop: any
  value: string
  current: string
}

const TabPanel: React.FC<PropTypes> = ({ allPath, tabsOpen, value, pathMatchScrollTop, current }) => {
  const active = value === current;
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(active);
    if (active) document.documentElement.scrollTop = pathMatchScrollTop[value];
  }, [current]);
  
  return (
    <Box
      sx={{
        height: '100%'
      }}
      style={{
        display: active ? 'block' : 'none',
        opacity: show ? 1 : 0,
      }}
    >
      {tabsOpen.includes(value) ? <RenderPage {...{ allPath, value }} /> : ''}
    </Box>
  );
};

export default TabPanel;
