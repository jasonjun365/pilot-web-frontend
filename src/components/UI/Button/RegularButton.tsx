import React from 'react';
import { Box, CircularProgress } from '@mui/material';
import PureButton from './PureButton';

interface PropTypes { // states
  label: React.ReactNode
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  loading?: boolean
  disabled?: boolean
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | undefined
  size?: 'small' | 'medium' | 'large' | undefined
  variant?: 'contained' | 'text' | 'outlined' | undefined
  autoFocus?: boolean
  type?: 'button' | 'submit' | 'reset' | undefined
  sx?: any
  className?: string
  countdownData?: {active: boolean, seconds: number}
}

interface PropTypes { // methods
  onClick: (v?: any) => any
}

const Btn: React.FC<PropTypes> = ({ loading=false, disabled=false, countdownData, ...props }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ position: 'relative' }}>
        <PureButton {...props} disabled={disabled || loading} countdownData={countdownData} />
        {loading && (
          <CircularProgress
            size={24}
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginTop: '-12px',
              marginLeft: '-12px',
            }}
          />
        )}
      </Box>
    </Box>
  );
};

export default Btn;
