import React from 'react';
import Head from './Head';
import ViewStylePropTypes from '@/libs/types/ViewStyle';
import {IOrder} from '@/libs/types/entities';

interface PropTypes extends ViewStylePropTypes {
  orderDetail?: IOrder
  handleSubmit?: () => void
  handleCancel?: () => void
}

const View: React.FC<PropTypes> = ({orderDetail, getMixinStyle, ...props }) => {
  return (
    <div className={getMixinStyle('layout')}>
      <Head {...props} />
      <div className={getMixinStyle('detail')}>Display a payment form. User has to fill bank card info, and than click pay button.</div>
    </div>
  );
};

export default View;
