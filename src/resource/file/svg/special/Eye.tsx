import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@mui/material/styles';
import DefaultPropTypes from '@/resource/file/svg/interface';
import style from './index.module.scss';

interface PropTypes extends DefaultPropTypes {
  open: boolean
}

const Svg: React.FC<PropTypes> = ({ width=24, height=24, open=false, onClick }) => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const color = 'var(--' + mode + '-neutral-400)';

  return (
    <div
      onClick={() => onClick && onClick()} className={clsx(style.layout, onClick && style[mode])}
      style={{ height: '100%', display: 'flex', alignItems: 'center' }}
    >
      <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        {open ? (
          <path d="M21.851 11.812a13.216 13.216 0 0 0-3.454-4.573l1.942-1.959a.838.838 0 0 0-1.19-1.18L17 6.266a9.754 9.754 0 0 0-5-1.331c-6.25 0-9.12 5.263-9.85 6.877a1.667 1.667 0 0 0 0 1.378 13.216 13.216 0 0 0 3.453 4.573l-1.941 1.96a.837.837 0 0 0 1.189 1.179L7 18.734a9.755 9.755 0 0 0 5 1.33c6.25 0 9.12-5.263 9.851-6.876a1.666 1.666 0 0 0 0-1.377zM7 12.5a5.068 5.068 0 0 1 .727-2.625 5.01 5.01 0 0 1 1.977-1.858 4.956 4.956 0 0 1 5.189.377l-1.21 1.22A3.268 3.268 0 0 0 12 9.138c-.884 0-1.732.354-2.357.985a3.34 3.34 0 0 0-.504 4.075l-1.21 1.22A5.04 5.04 0 0 1 7 12.5zm5 5.044a4.939 4.939 0 0 1-2.892-.938l1.21-1.22c.508.309 1.089.474 1.682.476.884 0 1.732-.354 2.357-.984a3.34 3.34 0 0 0 .504-4.075l1.21-1.22a5.072 5.072 0 0 1 .374 5.234 5.019 5.019 0 0 1-1.842 1.993 4.96 4.96 0 0 1-2.603.734z" fill={color} />
        ) : (
          <path fillRule="evenodd" clipRule="evenodd" d="M12 4.5c6.25 0 9.12 5.218 9.851 6.818a1.64 1.64 0 0 1 0 1.365c-.732 1.6-3.6 6.817-9.85 6.817-6.251 0-9.12-5.217-9.852-6.816a1.64 1.64 0 0 1 0-1.366C2.881 9.718 5.75 4.5 12 4.5zM9.222 16.158a5 5 0 1 0 5.556-8.315 5 5 0 0 0-5.556 8.315zM15.334 12a3.333 3.333 0 1 1-6.667 0 3.333 3.333 0 0 1 6.667 0z" fill={color} />
        )}
      </svg>
    </div>
  );
};

export default Svg;