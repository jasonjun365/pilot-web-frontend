import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@mui/material/styles';
import DefaultPropTypes from '@/resource/file/svg/interface';
import style from './index.module.scss';

interface PropTypes extends DefaultPropTypes {
  checked: boolean
  indeterminate?: boolean
  disabled?: boolean
}

const Svg: React.FC<PropTypes> = ({ width=24, height=24, checked, indeterminate, disabled, onClick }) => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const color1 = 'var(--' + mode + '-neutral-900-m)';
  const color2 = disabled ? 'var(--' + mode + '-background-bg-4)' : checked || indeterminate ? 'var(--' + mode + '-system-blue-500-m)' : 'var(--' + mode + '-neutral-900-m)';

  return (
    <div
      onClick={() => !disabled && onClick && onClick()}
      className={clsx(style.layout, onClick && style[mode])}
    >
      <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        {checked ? (
          <>
            <path fill={color1} d="M5 6h14v13H5z"/>
            <path d="M20.67 3.29a.99.99 0 0 0-.71-.29h-16c-.27 0-.52.11-.71.29a.99.99 0 0 0-.29.71v16c0 .27.11.52.29.71.19.19.44.29.71.29h16c.27 0 .52-.11.71-.29.19-.18.29-.44.29-.71V4c0-.27-.11-.52-.29-.71zm-3.34 7.34-6.36 6.36-3.54-3.54a.996.996 0 1 1 1.41-1.41l2.12 2.12 4.95-4.95a.996.996 0 0 1 1.41 0c.4.4.4 1.03.01 1.42z" fill={color2} />
          </>
        ) : indeterminate ? (
          <>
            <path d="M20.67 3.29a.99.99 0 0 0-.71-.29h-16c-.27 0-.52.11-.71.29a.99.99 0 0 0-.29.71v16c0 .27.11.52.29.71.19.19.44.29.71.29h16c.27 0 .52-.11.71-.29.19-.18.29-.44.29-.71V4c0-.27-.11-.52-.29-.71z" fill={color2} />
            <rect x="5" y="11" width="14" height="2" rx="1" fill={color1} />
          </>
        ) : (
          <path d="M4 3h16c.3 0 .5.1.7.3.2.2.3.4.3.7v16c0 .3-.1.5-.3.7-.2.2-.5.3-.7.3H4c-.3 0-.5-.1-.7-.3-.2-.2-.3-.4-.3-.7V4c0-.3.1-.5.3-.7.1-.2.4-.3.7-.3zm.1 1.2v15.7h15.7V4.2H4.1z" fill={color2} />
        )}
      </svg>
    </div>
  );
};

export default Svg;