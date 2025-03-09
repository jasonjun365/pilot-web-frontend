import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@mui/material/styles';
import PropTypes from '../interface';
import style from './index.module.scss';

const Svg: React.FC<PropTypes> = ({ width=24, height=24, onClick }) => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const color = 'var(--' + mode + '-neutral-500)';

  return (
    <div
      onClick={() => onClick && onClick()}
      className={clsx(style.layout, onClick && style[mode])} 
    >
      <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M4.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm15 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-6-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" fill={color} />
      </svg>
    </div>
  );
};

export default Svg;