import React from 'react';
import PropTypes from '../interface';
import {useTheme} from '@mui/material/styles';

const Svg: React.FC<PropTypes> = ({ width=14, height=14 }) => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const color = 'var(--' + mode + '-neutral-900-m)';

  return (
    <div>
      <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.364 11.7779L10.793 20.3489C10.4025 20.7394 10.4025 21.3724 10.793 21.7629C11.1835 22.1534 11.8165 22.1534 12.207 21.7629L22.192 11.7779L12.707 2.29281C12.3166 1.90234 11.6835 1.90234 11.293 2.29281C10.9025 2.68327 10.9025 3.31634 11.293 3.7068L19.364 11.7779Z" fill={color} />
      </svg>
    </div>
  );
};

export default Svg;