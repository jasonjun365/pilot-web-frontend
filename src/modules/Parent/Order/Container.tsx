
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Actions from '@/store/actions';

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

  const states = {
    userData: userState.data
  };

  const methods = {
    handleSubmit: () => {
      navigate('/payment', { replace: true });
    },
    handleCancel: () => {
      navigate('/children', { replace: true });
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