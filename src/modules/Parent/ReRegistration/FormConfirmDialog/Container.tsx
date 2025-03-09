import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import Actions from '@/store/actions';

const {
  actions: thisActions,
  thunks: thisThunks,
} = Actions.parent.reRegistration;

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
  };

  const methods = {
    handleSubmit: (params: any) => {
      console.log('handleSubmit:', params);
      // TODO call api for create  a tuition record and a order record, than return a order object, than set order detail to store
      // close confirmation dialog and redirect to Order page
      dispatch(thisActions.setConfirmDialog({title: '', open: false}));
      navigate('/order?oid=' + 120, { replace: true });
    },
    handleClose: () => {
      dispatch(thisActions.setConfirmDialog({title: '', open: false}));
      navigate('/withdrawal?sid=' + 120, { replace: true });
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