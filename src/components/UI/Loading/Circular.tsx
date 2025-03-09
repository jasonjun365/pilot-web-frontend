import React from 'react';
import { Box, CircularProgress } from '@mui/material';

interface PropTypes { // states
  loading: boolean
  size?: number
  thickness?: number
  value?: number
  mask?: boolean
  inline?: boolean
  style?: any
  className?: string
}

interface PropTypes { // node
  children?: React.ReactNode
}

const CircularLoading: React.FC<PropTypes> = ({ loading, size=24, thickness=2, value, mask, inline, style, className, children }) => {
  return (
    <Box sx={{ position: 'relative', display: inline ? 'inline-block' : 'block', ...style }} className={className}>
      {children}
      {loading && (
        <>
          <CircularProgress
            size={size}
            thickness={thickness}
            sx={{
              marginTop: (-size / 2) + 'px',
              marginLeft: (-size / 2) + 'px',
              position: 'absolute',
              top: '50%',
              left: '50%',
              zIndex: 10,
            }}
            {...(value || value === 0 ? { value, variant: 'determinate' } : {})}
          />
          {mask && (
            <Box sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: 0,
              left: 0,
              zIndex: 9,
              opacity: 0.8,
            }} />
          )}
        </>
      )}
    </Box>
  );
};

export default CircularLoading;
