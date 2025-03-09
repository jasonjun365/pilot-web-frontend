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
        <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z" fill="url(#kqcho4dxca)"/>
        <path d="m4.994 11.897 8.081-3.33c.798-.346 3.503-1.456 3.503-1.456s1.249-.486 1.145.693c-.035.486-.313 2.185-.59 4.024l-.867 5.445s-.07.797-.659.936c-.59.139-1.56-.485-1.734-.624-.139-.104-2.601-1.665-3.503-2.428-.243-.208-.52-.624.035-1.11a132.413 132.413 0 0 0 3.641-3.468c.417-.416.833-1.387-.901-.208l-4.89 3.295s-.555.346-1.596.034c-1.04-.312-2.254-.728-2.254-.728s-.833-.52.59-1.075z" fill="#fff"/>
        <defs>
          <linearGradient id="kqcho4dxca" x1="16.001" y1="4.001" x2="10.001" y2="18" gradientUnits="userSpaceOnUse">
            <stop stopColor="#37AEE2"/>
            <stop offset="1" stopColor="#1E96C8"/>
          </linearGradient>
        </defs>
      </svg>
    );
  } else {
    return (
      <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM10.8959 7.13873L4.16182 9.9133C2.97685 10.3757 3.67049 10.8093 3.67049 10.8093C3.67049 10.8093 4.68205 11.1561 5.5491 11.4162C6.41616 11.6763 6.87858 11.3873 6.87858 11.3873L10.9537 8.64162C12.3988 7.65897 12.052 8.46821 11.7052 8.81503C10.9537 9.56648 9.71095 10.7515 8.67049 11.7052C8.20806 12.1098 8.43928 12.4567 8.64159 12.6301C9.22973 13.1277 10.6146 14.0326 11.2441 14.4439C11.419 14.5582 11.5355 14.6343 11.5607 14.6532C11.7052 14.7688 12.5144 15.289 13.0058 15.1734C13.4971 15.0578 13.5549 14.3931 13.5549 14.3931L14.2774 9.8555C14.3416 9.43008 14.4059 9.01359 14.4657 8.6252C14.6215 7.61511 14.7479 6.79515 14.7688 6.5029C14.8555 5.52024 13.815 5.92486 13.815 5.92486C13.815 5.92486 11.5607 6.84972 10.8959 7.13873Z" fill={color} />
      </svg>
    );
  }
};

export default Svg;