import React from 'react';
import PropTypes from '../interface';
import {useTheme} from '@mui/material/styles';

const Svg: React.FC<PropTypes> = ({ width=20, height=20 }) => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const color = 'var(--' + mode + '-neutral-900-m)';

  return (
    <div>
      <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M1.668 10.001a8.333 8.333 0 1 0 16.667 0 8.333 8.333 0 1 0-16.667 0zm13.047 4.714a6.666 6.666 0 1 1-9.428-9.427 6.666 6.666 0 0 1 9.428 9.427zm.286-4.714a5 5 0 0 1-5 5v-10a5 5 0 0 1 5 5z" fill={color} />
      </svg>
    </div>
  );
};

export default Svg;