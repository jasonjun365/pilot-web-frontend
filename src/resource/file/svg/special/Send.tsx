import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@mui/material/styles';
import PropTypes from '../interface';
import style from './index.module.scss';

const Svg: React.FC<PropTypes> = ({ width=24, height=24, disabled, onClick }) => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const color = disabled ? 'var(--' + mode + '-neutral-200)' : 'var(--' + mode + '-system-blue-500-m)';

  return (
    <div
      className={clsx(style.layout, onClick && style[mode] && style[mode + (disabled ? '-disabled' : '')])}
      onClick={() => !disabled && onClick && onClick()}
    >
      <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="m4.072 13.424 6.223-1.226c.556-.109.556-.287 0-.396l-6.223-1.226c-.37-.073-.732-.429-.806-.793L2.022 3.655c-.112-.548.216-.802.731-.568l18.99 8.63c.343.156.343.41 0 .566l-18.99 8.63c-.515.234-.843-.02-.731-.568l1.244-6.128c.074-.364.435-.72.806-.793z" fill={color} />
      </svg>
    </div>
  );
};

export default Svg;