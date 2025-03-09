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
      onClick={() => onClick && onClick()} className={clsx(style.layout, onClick && style[mode])}
    >
      <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M13.333 3.334H6.666a.836.836 0 0 1-.833-.834c0-.458.375-.833.833-.833h6.667c.458 0 .833.375.833.833a.836.836 0 0 1-.833.834zM2.5 4.167h15c.458 0 .833.375.833.833a.836.836 0 0 1-.833.834h-.834V17.5a.81.81 0 0 1-.241.592.86.86 0 0 1-.592.242H4.167a.86.86 0 0 1-.592-.242.86.86 0 0 1-.242-.592V5.834H2.5A.836.836 0 0 1 1.667 5c0-.458.375-.833.833-.833zm6.666 10h1.667V12.5H9.166v1.667zm0-2.5h1.667V10H9.166v1.667zm0-2.5h1.667V7.5H9.166v1.667z" fill={color} />
      </svg>
    </div>
  );
};

export default Svg;