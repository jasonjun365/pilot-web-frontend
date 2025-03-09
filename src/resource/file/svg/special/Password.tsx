import React from 'react';
import { useTheme } from '@mui/material/styles';
import PropTypes from '../interface';

const Svg: React.FC<PropTypes> = ({ width=78, height=6 }) => {
  const theme = useTheme();
  const dark = theme.palette.mode === 'dark';
  const color = dark ? '#fff' : '#010101';

  return (
    <div>
      <svg width={width} height={height} viewBox="0 0 78 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="3" cy="3" r="3" fill={color}/>
        <circle cx="15" cy="3" r="3" fill={color}/>
        <circle cx="27" cy="3" r="3" fill={color}/>
        <circle cx="39" cy="3" r="3" fill={color}/>
        <circle cx="51" cy="3" r="3" fill={color}/>
        <circle cx="63" cy="3" r="3" fill={color}/>
        <circle cx="75" cy="3" r="3" fill={color}/>
      </svg>
    </div>
  );
};

export default Svg;