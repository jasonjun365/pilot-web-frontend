import React from 'react';
import RegularButton from '@/components/UI/Button/RegularButton';
import ViewStylePropTypes from '@/libs/types/ViewStyle';

interface PropTypes extends ViewStylePropTypes { // states
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

const SmallBtn: React.FC<PropTypes> = ({ getMixinStyle, ...props }) => {
  return (
    <span className={getMixinStyle('layout')}>
      <RegularButton
        {...props}
        className={getMixinStyle('btn')}
      />
    </span>
  );
};

export default SmallBtn;
