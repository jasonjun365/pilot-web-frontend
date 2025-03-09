import React from 'react';
import { useTheme } from '@mui/material/styles';
import PropTypes from '@/resource/file/svg/interface';

interface IconPropTypes extends PropTypes {
  isColorMode?: boolean
}

const Svg: React.FC<IconPropTypes> = ({ width=20, height=20, isColorMode=false }) => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const color = 'var(--' + mode + '-neutral-900-m)';

  if (isColorMode) {
    return (
      <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0c6.628 0 12 5.393 12 12.047C24 18.19 19.42 23.259 13.5 24v-8.942h4.125L18 12.047h-4.5V10.54c0-.832.671-1.506 1.5-1.506h3V6.023h-3c-2.486 0-4.5 2.023-4.5 4.518v1.506H8.25v3.011h2.25V24C4.58 23.26 0 18.19 0 12.047 0 5.393 5.372 0 12 0z" fill="#3578EA"/>
      </svg>
    );
  } else {
    return (
      <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 0C15.5231 0 20 4.49429 20 10.0389C20 15.1581 16.1831 19.3826 11.25 20V12.5486H14.6875L15 10.0389H11.25V8.78404C11.25 8.09073 11.8094 7.52918 12.5 7.52918H15V5.01945H12.5C10.4288 5.01945 8.75 6.70473 8.75 8.78404V10.0389H6.875V12.5486H8.75V17.5091V19.7616V20C3.81687 19.3826 0 15.1581 0 10.0389C0 4.49429 4.47688 0 10 0Z" fill={color} />
      </svg>
    );
  }
};

export default Svg;