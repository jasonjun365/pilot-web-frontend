import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@mui/material/styles';
import PropTypes from '../interface';
import style from './index.module.scss';

const Svg: React.FC<PropTypes> = ({ width=13, height=12, onClick }) => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const color = 'var(--' + mode + '-neutral-300)';

  return (
    <div
      onClick={() => onClick && onClick()}
      className={clsx(style.layout, onClick && style[mode])}
    >
      <svg width={width} height={height} viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.3 9.078V1.492a.5.5 0 0 1 1 0v7.586l3.733-3.732a.5.5 0 1 1 .707.707l-4.736 4.736a.288.288 0 0 1-.408 0L1.861 6.053a.5.5 0 1 1 .707-.707L6.3 9.078z" fill={color} />
      </svg>
    </div>
  );
};

export default Svg;