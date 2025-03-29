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
} = Actions.parent.reRegistration;

const {
  actions: orderActions,
} = Actions.parent.order;

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
  const thisState = useSelector((state: any) => state.parent.reRegistration);

  const states = {
    data: thisState.formModule.data,
    title: thisState.formConfirm.title,
    open: thisState.formConfirm.open,
    loading: thisState.loading,
    pathname: thisState.pathname,
  };

  const methods = {
    handleSubmit: (params: any) => {
      // Step 3 - call api for create  a tuition record and an order record, then return an order object, than set order detail to store
      const postData = {...states.data, ...{dataStatus: 'Progress'}};
      dispatch(thisThunks.postTuition({data: postData})).then(unwrapResult).then((response: any) => {
        // Step 4 - after api return success, redirect to order page
        if (response.code === 0) {
          dispatch(orderActions.setCurrentTuition(response.data));
          dispatch(thisActions.setConfirmDialog({title: '', open: false}));
          navigate('/order?oid=' + response.data.order.id, { replace: true });
          dispatch(thisActions.resetFormData());
          dispatch(menuActions.removeTab(states.pathname));
        }
      });
    },
    handleClose: (type?: string) => {
      if (type === 'dialogEvent') {
        dispatch(thisActions.resetFormData());
        navigate('/children', { replace: true });
        dispatch(menuActions.removeTab(states.pathname));
      } else {
        navigate('/withdrawal?sid=' + 120, { replace: true });
      }
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