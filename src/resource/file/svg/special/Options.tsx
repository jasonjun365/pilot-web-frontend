import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@mui/material/styles';
import PropTypes from '../interface';
import style from './index.module.scss';

const Svg: React.FC<PropTypes> = ({ width=20, height=20, onClick }) => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const color = 'var(--' + mode + '-neutral-300)';

  return (
    <div
      onClick={() => onClick && onClick()}
      className={clsx(style.layout, onClick && style[mode])} 
    >
      <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M10 5a1.25 1.25 0 1 0 0-2.5A1.25 1.25 0 0 0 10 5zm0 12.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5zm1.25-7.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0z" fill={color} />
      </svg>
    </div>
  );
};

export default Svg;