import React from 'react';
import PropTypes from '../interface';
import {useTheme} from '@mui/material/styles';

const Svg: React.FC<PropTypes> = ({ width=20, height=20 }) => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const color = 'var(--' + mode + '-system-blue-500-m)';

  return (
    <div>
      <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.6667 5L7.80955 14.5238L3.33334 10.1952" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" stroke={color} />
      </svg>
    </div>
  );
};

export default Svg;