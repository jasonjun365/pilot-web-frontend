import React from 'react';
import { Button } from '@mui/material';

interface PropTypes { // states
  label: React.ReactNode
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  disabled?: boolean
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | undefined
  size?: 'small' | 'medium' | 'large' | undefined
  variant?: 'contained' | 'text' | 'outlined' | undefined
  autoFocus?: boolean
  type?: 'button' | 'submit' | 'reset' | undefined
  sx?: any
  disableRipple?: boolean
  className?: string
  countdownData?: {active: boolean, seconds: number}
}

interface PropTypes { // methods
  onClick?: (v?: any) => any
}

const PureButton: React.FC<PropTypes> = ({ label, startIcon, endIcon, disabled=false, color=undefined, size='small', variant=undefined, autoFocus, type, sx={ whiteSpace: 'nowrap', minWidth: 40 }, disableRipple, className, countdownData, onClick }) => {
  return (
    <Button
      startIcon={startIcon}
      endIcon={endIcon}
      disabled={disabled}
      color={color}
      size={size}
      variant={variant}
      autoFocus={autoFocus}
      type={type}
      onClick={onClick}
      sx={sx}
      disableRipple={disableRipple}
      className={className}
    >
      {countdownData?.active ? countdownData.seconds : label}
    </Button>
  );
};

export default PureButton;
