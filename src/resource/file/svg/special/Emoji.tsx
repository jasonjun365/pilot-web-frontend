import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import DefaultPropTypes from '../interface';
import style from './index.module.scss';

interface PropTypes extends DefaultPropTypes {
  variant?: 'contained' | 'outlined'
}

const Svg: React.FC<PropTypes> = ({ width=24, height=24, disabled, active, styles, variant='contained', onClick }) => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const color = disabled ? 'var(--' + mode + '-neutral-200)' : 'var(--' + mode + '-system-blue-500-m)';

  return (
    <Box
      onClick={() => !disabled && onClick && onClick()}
      className={clsx(style.layout, onClick && style[mode] && style[mode + (disabled ? '-disabled' : '')], active && style[mode + (active ? '-active' : '')])}
      sx={styles}
    >
      {variant === 'contained' && (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7 9.92c0-.33.13-.65.37-.88.23-.23.55-.37.88-.37.33 0 .65.13.88.37.23.23.37.55.37.88 0 .33-.13.65-.37.88-.23.23-.55.37-.88.37-.33 0-.65-.13-.88-.37-.24-.24-.37-.55-.37-.88zm8.85 5.34c-.21.51-.52.96-.9 1.35a4.202 4.202 0 0 1-2.94 1.22c-.55 0-1.09-.11-1.59-.32-.51-.21-.96-.52-1.35-.9a4.203 4.203 0 0 1-1.22-2.94h8.33c-.02.54-.13 1.09-.33 1.59zm.78-4.46c-.23.23-.55.37-.88.37-.33 0-.65-.13-.88-.37-.23-.23-.37-.55-.37-.88 0-.33.13-.65.37-.88.24-.23.55-.37.88-.37.33 0 .65.13.88.37.23.23.37.55.37.88 0 .33-.13.64-.37.88z" fill={color} />
        </svg>
      )}
      {variant === 'outlined' && (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2a9.935 9.935 0 0 1 7.071 2.929A9.935 9.935 0 0 1 22 12a9.935 9.935 0 0 1-2.929 7.071A9.935 9.935 0 0 1 12 22a9.935 9.935 0 0 1-7.071-2.929A9.935 9.935 0 0 1 2 12a9.934 9.934 0 0 1 2.929-7.071A9.934 9.934 0 0 1 12 2zM3.19 12c0 4.858 3.952 8.81 8.81 8.81 4.858 0 8.81-3.952 8.81-8.81 0-4.858-3.952-8.81-8.81-8.81-4.858 0-8.81 3.952-8.81 8.81zm3.111-2.64a2.503 2.503 0 0 1 3.536 0 .595.595 0 1 1-.842.841 1.311 1.311 0 0 0-1.852 0 .595.595 0 0 1-.842-.842zm11.398 0a2.503 2.503 0 0 0-3.536 0 .595.595 0 1 0 .842.841c.51-.51 1.341-.51 1.852 0a.593.593 0 0 0 .842 0 .595.595 0 0 0 0-.842zM6.722 12.436h10.556c.329 0 .595.266.595.595A5.88 5.88 0 0 1 12 18.905a5.88 5.88 0 0 1-5.873-5.873c0-.329.266-.595.595-.595zm.633 1.19A4.69 4.69 0 0 0 12 17.714a4.69 4.69 0 0 0 4.645-4.087h-9.29z"  fill={color} />
        </svg>
      )}
    </Box>
  );
};

export default Svg;