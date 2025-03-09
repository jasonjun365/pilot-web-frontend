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
        <path d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12z" fill="url(#ihfirs1rea)"/>
        <path d="m18.992 7.895-4.922 4.098 4.93 3.28V7.988a.552.552 0 0 0-.008-.092zM13.626 12.363l-.62.517a1.569 1.569 0 0 1-2.012 0l-.62-.517L5 15.94v.073c0 .305.248.554.553.554h12.893a.554.554 0 0 0 .554-.554v-.074l-5.374-3.576z" fill="#fff"/>
        <path d="M18.448 7.434H5.551c-.078 0-.112.1-.052.15l5.067 4.218.002.002.78.65c.378.314.926.314 1.304 0l5.848-4.87c.06-.05.026-.15-.052-.15zM5.008 7.895A.553.553 0 0 0 5 7.987v7.287l4.93-3.281-4.922-4.098z" fill="#fff"/>
        <defs>
          <linearGradient id="ihfirs1rea" x1="12" y1="0" x2="12" y2="24" gradientUnits="userSpaceOnUse">
            <stop stopColor="#5766E9"/>
            <stop offset="1" stopColor="#57B8D7"/>
          </linearGradient>
        </defs>
      </svg>
    );
  } else {
    return (
      <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0ZM15.3738 6.19486C15.4389 6.19509 15.4671 6.27806 15.4171 6.31976L10.5432 10.3783C10.2285 10.6403 9.77157 10.6403 9.45684 10.3783L4.58296 6.31976C4.53292 6.27808 4.56111 6.19512 4.62623 6.19486H15.3738ZM15.8264 6.57918L11.7252 9.9943L15.8334 12.7284V6.65616C15.8334 6.62991 15.8306 6.60429 15.8264 6.57918ZM11.3553 10.3023L10.8383 10.7328C10.5955 10.9351 10.2977 11.0362 10 11.0362C9.70232 11.0362 9.40457 10.9351 9.16171 10.7328L8.64471 10.3023L4.16667 13.2825V13.3439C4.16667 13.5983 4.37359 13.8052 4.62791 13.8052H15.3721C15.6264 13.8052 15.8333 13.5983 15.8333 13.3439V13.2825L11.3553 10.3023ZM4.17362 6.57918C4.16938 6.60429 4.16667 6.62986 4.16667 6.65616V12.7284L8.27486 9.99428L4.17362 6.57918Z" fill={color} />
      </svg>
    );
  }
};

export default Svg;