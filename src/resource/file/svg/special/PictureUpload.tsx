import React from 'react';
import { useTheme } from '@mui/material/styles';
import PropTypes from '../interface';

const Svg: React.FC<PropTypes> = ({ width=24, height=24 }) => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const color = 'var(--' + mode + '-neutral-300)';

  return (
    <div>
      <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.905 10.438h.001-7.344v-7.33c0-.604-.488-1.108-1.091-1.108h-.94c-.603 0-1.094.504-1.094 1.108v7.33H3.094c-.603 0-1.094.487-1.094 1.09v.946c0 .603.49 1.088 1.094 1.088h7.344v7.357c0 .603.49 1.081 1.093 1.081h.94c.603 0 1.092-.478 1.092-1.081v-7.357h7.342c.603 0 1.095-.485 1.095-1.088v-.945c0-.604-.492-1.091-1.095-1.091z" fill={color} />
      </svg>
    </div>
  );
};

export default Svg;