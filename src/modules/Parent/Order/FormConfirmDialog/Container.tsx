import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import Actions from '@/store/actions';

const {
  actions: menuActions,
} = Actions.basic.menu;

const {
  actions: thisActions,
  thunks: thisThunks,
} = Actions.parent.order;

const {
  actions: tuitionActions,
} = Actions.parent.tuition;

interface PropTypes { // states
  View: React.FC<any>
}

interface PropTypes { // methods
  handleGetData: (v: any) => void
}

const Special: React.FC<PropTypes> = ({ View, handleGetData }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const thisState = useSelector((state: any) => state.parent.order);

  const states = {
    title: thisState.formConfirm.title,
    open: thisState.formConfirm.open,
    orderDetail: thisState.orderDetail,
    loading: thisState.loading,
  };

  const methods = {
    handleSubmit: (params: any) => {
      if (states.orderDetail?.id) {
        dispatch(thisThunks.payOrder({urlParams: {oid: states.orderDetail?.id}})).then(unwrapResult).then((response: any) => {
          if (response.code === 0) {
            alert('Pay successful!');
            dispatch(menuActions.removeTab('/order'));
            dispatch(thisActions.setConfirmDialog({title: '', open: false}));
            navigate('/tuition', { replace: true });
          }
        });
      } else {
        alert('Order not found.');
      }
    },
    handleClose: () => {
      dispatch(thisActions.setConfirmDialog({title: '', open: false}));
    }
  };
  
  return (
    <View
      {...states}
      {...methods}
    />
  );
};

export default Special;