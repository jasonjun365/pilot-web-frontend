import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import { useTheme } from '@mui/material/styles';
import PropTypes from '../interface';
import style from './index.module.scss';

const Svg: React.FC<PropTypes> = ({ width=30, height=30, disabled, onClick }) => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const [isHover, setIsHover] = useState<boolean>(false);
  const [color1, setColor1] = useState<string>(`var(--${mode}-background-bg-2)`);
  const color2 = `var(--${mode}-neutral-900-m)`;

  useEffect(() => {
    if (isHover) {
      setColor1(`var(--${mode}-background-bg-3)`);
    } else {
      setColor1(`var(--${mode}-background-bg-2)`);
    }
  }, [isHover]);

  return (
    <div
      onClick={() => !disabled && onClick && onClick()}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={clsx(style.layout, style.noPadding, onClick && style[mode] && style[mode + (disabled ? '-disabled' : '')])}
    >
      <svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 15C0 6.716 6.716 0 15 0c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15z" fill={color1} />
        <path d="m15 13.94 5.16-5.16a.75.75 0 1 1 1.06 1.061l-5.16 5.16 5.16 5.159a.75.75 0 1 1-1.06 1.06L15 16.061l-5.16 5.16a.75.75 0 1 1-1.06-1.061L13.94 15 8.78 9.841a.75.75 0 0 1 1.06-1.06L15 13.94z" fill={color2} />
      </svg>
    </div>
  );
};

export default Svg;