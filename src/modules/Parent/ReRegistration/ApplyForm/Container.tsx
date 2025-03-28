import React, {useEffect} from 'react';
import { useTranslation } from 'react-i18next';
import {useLocation, useNavigate} from 'react-router-dom';
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

interface PropTypes { // states
  View: React.FC<any>
}

interface PropTypes { // methods

}

const Special: React.FC<PropTypes> = ({ View}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const _sid: any = searchParams.get('sid') || 0;
  const userState = useSelector((state: any) => ({
    data: state.basic.user.data
  }));
  const thisState = useSelector((state: any) => state.parent.reRegistration);
  const states = {
    studentId: _sid,
    studentOptions: thisState.formModule.studentOptions,
    programOptions: thisState.formModule.programOptions,
    activityOptions: thisState.formModule.activityOptions,
    formData: thisState.formModule.data,
    loading: thisState.loading,
    pathname: thisState.pathname,
  };

  const methods = {
    handleSubmit: (params: any) => {
      console.log('handleSubmit:', params);
      // Step 1 - set params to formData
      dispatch(thisActions.setFormData(params));
      // Step 2 - Open Confirm Dialog
      dispatch(thisActions.setConfirmDialog({title: 'Confirm', open: true}));
    },
    handleCancel: () => {
      dispatch(thisActions.resetFormData());
      navigate('/children', { replace: true });
      dispatch(menuActions.removeTab(states.pathname));
    }
  };

  useEffect(() => {
    dispatch(thisActions.setFormData({
      parentId: userState.data.userId,
      studentId: parseInt(_sid, 10)
    }));
    dispatch(thisActions.setPathname(location.pathname));
  }, []);

  return (
    <View
      {...states}
      {...methods}
    />
  );
};

export default Special;