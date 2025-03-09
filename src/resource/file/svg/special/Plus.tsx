import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@mui/material/styles';
import PropTypes from '../interface';
import style from './index.module.scss';

const Svg: React.FC<PropTypes> = ({ width=16, height=16, disabled, onClick }) => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const color = 'var(--' + mode + '-system-blue-500-m)';

  return (
    <div
      onClick={() => !disabled && onClick && onClick()}
      className={clsx(style.layout, onClick && style[mode] && style[mode + (disabled ? '-disabled' : '')])}
    >
      <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.937 6.959H9.043V2.072a.737.737 0 0 0-.728-.739h-.627a.738.738 0 0 0-.729.739v4.887H2.063a.729.729 0 0 0-.73.727v.63c0 .402.328.726.73.726h4.895v4.904c0 .402.327.72.73.72h.626a.722.722 0 0 0 .728-.72V9.042h4.895c.402 0 .73-.324.73-.726v-.63a.729.729 0 0 0-.73-.727z" fill={color} />
      </svg>
    </div>
  );
};

export default Svg;