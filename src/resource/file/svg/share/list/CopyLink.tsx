import React from 'react';
import { useTheme } from '@mui/material/styles';
import PropTypes from '@/resource/file/svg/interface';

const Svg: React.FC<PropTypes> = ({ width=20, height=20 }) => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const color1 = 'var(--' + mode + '-background-bg-0)';
  const color2 = 'var(--' + mode + '-neutral-900-m)';

  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z" fill={color2} />
      <g clipPath="url(#clip0)">
        <path fillRule="evenodd" clipRule="evenodd" d="M5.40141 10.9611C3.91919 9.47892 3.9192 7.07577 5.40141 5.59355C6.88363 4.11133 9.28678 4.11133 10.769 5.59355L11.535 6.35958C11.748 6.5726 11.748 6.91796 11.535 7.13097C11.322 7.34399 10.9767 7.34399 10.7636 7.13097L9.99761 6.36494C8.94142 5.30875 7.22899 5.30875 6.1728 6.36494C5.11661 7.42113 5.11661 9.13356 6.1728 10.1897L6.93883 10.9558C7.15185 11.1688 7.15185 11.5142 6.93883 11.7272C6.72582 11.9402 6.38046 11.9402 6.16745 11.7272L5.40141 10.9611Z" fill={color1}/>
        <path fillRule="evenodd" clipRule="evenodd" d="M12.4927 12.608C12.2796 12.821 11.9343 12.821 11.7213 12.608L8.35073 9.23742C8.13771 9.0244 8.13771 8.67904 8.35073 8.46603C8.56374 8.25301 8.9091 8.25301 9.12212 8.46603L12.4927 11.8366C12.7057 12.0496 12.7057 12.3949 12.4927 12.608Z" fill={color1}/>
        <path fillRule="evenodd" clipRule="evenodd" d="M9.23091 14.7913C10.7131 16.2735 13.1163 16.2735 14.5985 14.7913C16.0807 13.3091 16.0807 10.9059 14.5985 9.42372L13.8325 8.65769C13.6195 8.44468 13.2741 8.44468 13.0611 8.65769C12.8481 8.8707 12.8481 9.21607 13.0611 9.42908L13.8271 10.1951C14.8833 11.2513 14.8833 12.9637 13.8271 14.0199C12.7709 15.0761 11.0585 15.0761 10.0023 14.0199L9.23627 13.2539C9.02326 13.0409 8.67789 13.0409 8.46488 13.2539C8.25187 13.4669 8.25187 13.8123 8.46488 14.0253L9.23091 14.7913Z" fill={color1}/>
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="13" height="13" fill={color1} transform="translate(10 1) rotate(45)"/>
        </clipPath>
      </defs>
    </svg>
  );
};

export default Svg;