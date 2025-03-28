
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Actions from '@/store/actions';

const {
  actions: thisActions,
  thunks: thisThunks,
} = Actions.parent.withdrawal;

const {
  actions: menuActions,
} = Actions.basic.menu;

const {
  actions: reRegActions,
} = Actions.parent.reRegistration;

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
  const _sid: any = searchParams.get('sid') || 0;
  const userState = useSelector((state: any) => ({
    data: state.basic.user.data
  }));
  const reRegState = useSelector((state: any) => state.parent.reRegistration);
  const thisState = useSelector((state: any) => state.parent.withdrawal);

  const states = {
    userData: userState.data,
    pathname: reRegState.pathname,
    pdfUrl: thisState.pdfUrl
  };

  const methods = {
    handleSubmit: () => {
      window.open('/withdrawal.pdf','_blank');
      navigate('/children', { replace: true });
      dispatch(reRegActions.resetFormData());
      dispatch(menuActions.removeTab(states.pathname));
    },
    handleCancel: () => {
      navigate('/children', { replace: true });
      dispatch(reRegActions.resetFormData());
      dispatch(menuActions.removeTab(states.pathname));
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