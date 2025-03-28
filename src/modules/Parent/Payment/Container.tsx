
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
} = Actions.parent.payment;

interface PropTypes { // states
  View: React.FC<any>
}

interface PropTypes { // methods

}

const ContainerWrap: React.FC<PropTypes> = ({ View }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userState = useSelector((state: any) => ({
    data: state.basic.user.data
  }));
  const thisState = useSelector((state: any) => ({
    orderDetail: state.parent.order.orderDetail,
  }));

  const states = {
    orderDetail: thisState.orderDetail,
  };

  const methods = {
    handleSubmit: () => {
      alert('Pay successfully!');
      navigate('/tuition', { replace: true });
      dispatch(menuActions.removeTab('/payment'));
    },
    handleCancel: () => {
      navigate('/tuition', { replace: true });
      dispatch(menuActions.removeTab('/payment'));
    },
  };

  useEffect(() => {

  }, []);

  return (
    <View
      {...states}
      {...methods}
    />
  );
};

export default ContainerWrap;