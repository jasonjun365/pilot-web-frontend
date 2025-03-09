import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@mui/material/styles';
import PropTypes from '../interface';
import style from './index.module.scss';

const Svg: React.FC<PropTypes> = ({ width=36, height=36, onClick }) => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const color = 'var(--' + mode + '-neutral-300)';

  return (
    <div
      onClick={() => onClick && onClick()}
      className={clsx(style.layout, style.share, onClick && style[mode])}
    >
      <svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.187 19.923H13.52c-2.187 0-4.333.6-6.2 1.72a11.957 11.957 0 0 0-4.413 4.693c-.027-.36-.04-.72-.04-1.08 0-7.36 5.973-13.333 13.333-13.333v-5a.8.8 0 0 1 1.293-.627l11.254 9c.4.32.4.934 0 1.253l-11.254 9a.8.8 0 0 1-1.293-.626v-5h-.013z" fill={color} />
      </svg>
    </div>
  );
};

export default Svg;