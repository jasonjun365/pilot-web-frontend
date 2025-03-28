import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useTranslation } from 'react-i18next';
import ViewStylePropTypes from '@/libs/types/ViewStyle';
import SmallButton from '@/components/UI/Button/SmallButton';
import {IOrder} from '@/libs/types/entities';

interface PropTypes extends ViewStylePropTypes {
  orderDetail?: IOrder
  handleSubmit?: () => void
  handleReceipt?: () => void
  handleCancel?: () => void
}

const View: React.FC<PropTypes> = ({
  orderDetail,
  handleSubmit,
  handleReceipt,
  handleCancel,
  getMixinStyle
}) => {
  const { t } = useTranslation();

  return (
    <div className={getMixinStyle('layout')}>
      <div className={getMixinStyle('left')}>
        <span>Your Order Info</span>
        {orderDetail?.dataStatus && (
          <span className={getMixinStyle('data-status')}> ({orderDetail?.dataStatus})</span>
        )}
      </div>
      <div className={getMixinStyle('right')}>
        {orderDetail?.dataStatus === 'Progress' && (
          <div className={getMixinStyle('btn-box')}>
            <SmallButton label="Confirm Pay" onClick={handleSubmit}/>
          </div>
        )}
        {orderDetail?.dataStatus === 'Done' && (
          <div className={getMixinStyle('btn-box')}>
            <SmallButton label="Download Receipt" onClick={handleReceipt}/>
          </div>
        )}
        <div className={getMixinStyle('btn-box')}>
          <SmallButton label="Back" onClick={handleCancel}/>
        </div>
      </div>
    </div>
  );
};

export default View;
