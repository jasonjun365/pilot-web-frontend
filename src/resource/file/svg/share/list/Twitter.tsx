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
        <g clipPath="url(#effwdq0sia)">
          <path d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12z" fill="#4AA0EB"/>
          <path d="M19.637 7.966c-.569.24-1.174.4-1.805.478A3.031 3.031 0 0 0 19.21 6.77a6.388 6.388 0 0 1-1.986.733 3.189 3.189 0 0 0-2.287-.958c-1.733 0-3.129 1.36-3.129 3.029 0 .24.021.47.073.69a8.966 8.966 0 0 1-6.454-3.167C5.157 7.55 5 8.069 5 8.627c0 1.049.558 1.978 1.39 2.517a3.174 3.174 0 0 1-1.414-.373v.033c0 1.471 1.085 2.694 2.508 2.975-.255.068-.532.1-.82.1-.201 0-.404-.011-.593-.052.405 1.2 1.556 2.08 2.925 2.11a6.429 6.429 0 0 1-3.882 1.29c-.257 0-.503-.01-.75-.04a9.034 9.034 0 0 0 4.804 1.358c5.762 0 8.912-4.616 8.912-8.616a7.45 7.45 0 0 0-.012-.391 6.137 6.137 0 0 0 1.57-1.572z" fill="#fff"/>
        </g>
        <defs>
          <clipPath id="effwdq0sia">
            <path fill="#fff" d="M0 0h24v24H0z"/>
          </clipPath>
        </defs>
      </svg>
    );
  } else {
    return (
      <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0ZM14.8599 7.0369C15.3857 6.97228 15.8901 6.83921 16.3633 6.63844C16.0086 7.14921 15.5735 7.59305 15.0556 7.94844C15.0612 8.05536 15.0652 8.16305 15.0652 8.27459C15.0652 11.6084 12.4402 15.4546 7.63881 15.4546C6.16165 15.4546 4.79187 15.0431 3.63608 14.3223C3.84131 14.3477 4.04653 14.3569 4.26051 14.3569C5.48074 14.3569 6.6079 13.9523 7.49562 13.2807C6.35494 13.2569 5.39562 12.5223 5.05756 11.5231C5.21585 11.5569 5.38449 11.5661 5.55153 11.5661C5.79176 11.5661 6.02324 11.5392 6.23562 11.4831C5.0496 11.2484 4.14517 10.23 4.14517 9.00382V8.97613C4.49358 9.16151 4.90483 9.27921 5.32403 9.2869C4.6304 8.83844 4.16506 8.06382 4.16506 7.18997C4.16506 6.72459 4.2971 6.29228 4.52221 5.91459C5.81165 7.44613 7.73108 8.45151 9.90028 8.55382C9.85733 8.37074 9.83983 8.17844 9.83983 7.97844C9.83983 6.58844 11.0028 5.45459 12.4473 5.45459C13.1919 5.45459 13.8744 5.75997 14.3532 6.25305C14.9466 6.13844 15.5035 5.93305 16.0078 5.64228C15.8137 6.23382 15.4009 6.72459 14.8599 7.0369Z" fill={color} />
      </svg>
    );
  }
};

export default Svg;