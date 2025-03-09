import React from 'react';
import RegularButton from '@/components/UI/Button/RegularButton';
import ViewStylePropTypes from '@/libs/types/ViewStyle';

interface PropTypes extends ViewStylePropTypes { // states
  themeColor: 'primary' | 'secondary' | 'default'
  label: React.ReactNode
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  loading?: boolean
  disabled?: boolean
  size?: 'small' | 'medium' | 'large' | undefined
  variant?: 'contained' | 'text' | 'outlined' | undefined
  autoFocus?: boolean
  type?: 'button' | 'submit' | 'reset' | undefined
  sx?: any
  className?: string
}

interface PropTypes { // methods
  onClick: (v?: any) => any
}

const BigBtn: React.FC<PropTypes> = ({ getMixinStyle, themeColor='default', ...props }) => {
  return (
    <span className={getMixinStyle('layout')}>
      <RegularButton
        {...props}
        className={getMixinStyle('btn', [themeColor])}
      />
    </span>
  );
};

export default BigBtn;
