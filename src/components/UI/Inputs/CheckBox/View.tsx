import React from 'react';
import CheckboxIcon from '@/resource/file/svg/special/Checkbox';
import ViewStylePropTypes from '@/libs/types/ViewStyle';

interface PropTypes extends ViewStylePropTypes {
  checked: boolean
  loading?: boolean
  disabled?: boolean
  children?: React.ReactNode
}

interface PropTypes {
  onClick: (v: boolean) => void
}

const View: React.FC<PropTypes> = ({ checked, loading, disabled, children, onClick, getMixinStyle }) => {
  return (
    <div
      className={getMixinStyle('layout', loading ? ['loading', 'disabled'] : disabled ? ['disabled'] : [])}
      onClick={() => !disabled && onClick(!checked)}
    >
      <CheckboxIcon width={32} height={32} checked={checked} disabled={disabled || loading} />
      {children}
    </div>
  );
};

export default View;
