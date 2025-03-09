import React from 'react';
import clsx from 'clsx';
import Tabs from './Tabs';

interface PropTypes { // style
  mode: 'dark' | 'light'
  style: any
  mediaStyle: any
  breakpoints: any
}

const View: React.FC<PropTypes> = ({ mode, style, mediaStyle }) => {
  return (
    <div className={clsx(style.layout, mediaStyle.layout, style[`layout-${mode}`], mediaStyle[`layout-${mode}`])}>
      <Tabs />
    </div>
  );
};

export default View;
