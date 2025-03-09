import React from 'react';
import { useTheme } from '@mui/material/styles';
import PropTypes from '../interface';

const Svg: React.FC<PropTypes> = ({ width=40, height=40 }) => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const color1 = mode === 'dark' ? '#303F50' : '#CBCDD6';
  const color2 = mode === 'dark' ? '#D6DCE2' : '#EEEFF3';

  return (
    <div>
      <svg width={width} height={height} viewBox="0 0 134 134" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="67" cy="67" r="67" fill={color1} />
        <path d="M14.01 108.007c9.823-19.34 29.763-32.573 52.762-32.573 23.14 0 43.182 13.396 52.94 32.929-12.204 15.53-31.123 25.534-52.382 25.636a85.58 85.58 0 0 1-5.82-.221c-19.304-1.565-36.294-11.313-47.5-25.771zM66.772 75.434c-16.044 0-29.05-13.137-29.05-29.342S50.728 16.75 66.772 16.75c16.043 0 29.05 13.137 29.05 29.342s-13.007 29.342-29.05 29.342z" fill={color2} />
      </svg>
    </div>
  );
};

export default Svg;