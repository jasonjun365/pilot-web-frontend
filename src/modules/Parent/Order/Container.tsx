
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Actions from '@/store/actions';

const {
  actions: menuActions,
} = Actions.basic.menu;

const {
  actions: thisActions,
  thunks: thisThunks,
} = Actions.parent.order;

interface PropTypes { // states
  View: React.FC<any>
}

interface PropTypes { // methods

}

const ContainerWrap: React.FC<PropTypes> = ({ View }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const _oid: any = searchParams.get('oid') || 0;
  const userState = useSelector((state: any) => ({
    data: state.basic.user.data
  }));
  const thisState = useSelector((state: any) => ({
    currentTuition: state.parent.order.currentTuition,
    orderDetail: state.parent.order.orderDetail,
  }));

  const states = {
    orderDetail: thisState.orderDetail,
  };

  const methods = {
    handleSubmit: () => {
      navigate('/payment', { replace: true });
      dispatch(menuActions.removeTab('/order'));
    },
    handleReceipt: () => {
      // TODO receipt display receipt pdf in new tab
    },
    handleCancel: () => {
      navigate('/tuition', { replace: true });
      dispatch(menuActions.removeTab('/order'));
    },
  };

  useEffect(() => {
    if (_oid) {
      // get oid detail from back-end
      dispatch(thisThunks.getOrder({urlParams: {oid: _oid}}));
    }
  }, []);

  return (
    <View
      {...states}
      {...methods}
    />
  );
};

export default ContainerWrap;