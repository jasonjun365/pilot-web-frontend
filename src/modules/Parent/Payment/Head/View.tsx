import React from 'react';
import { useTranslation } from 'react-i18next';
import ViewStylePropTypes from '@/libs/types/ViewStyle';
import SmallButton from '@/components/UI/Button/SmallButton';

interface PropTypes extends ViewStylePropTypes {
  handleSubmit?: () => void
  handleCancel?: () => void
}

const View: React.FC<PropTypes> = ({ handleSubmit, handleCancel, getMixinStyle }) => {
  const { t } = useTranslation();

  return (
    <div className={getMixinStyle('layout')}>
      <div className={getMixinStyle('left')}><span>Payment Form</span></div>
      <div className={getMixinStyle('right')}>
        <div className={getMixinStyle('btn-box')}>
          <SmallButton label="Pay" onClick={handleSubmit}/>
        </div>
        <div className={getMixinStyle('btn-box')}>
          <SmallButton label="Back" onClick={handleCancel}/>
        </div>
      </div>
    </div>
  );
};

export default View;
