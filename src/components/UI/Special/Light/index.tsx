import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Index from './View';
import Actions from '@/store/actions';

const {
  actions: lightActions
} = Actions.basic.light;

const Light: React.FC = () => {
  const dispatch = useDispatch();
  const lightState = useSelector((state: any) => state.basic.light);
  
  const states = {
    open: lightState.open,
  };

  const methods = {
    handleOpen: () => {
      dispatch(lightActions.open());
    },
    handleClose: () => {
      dispatch(lightActions.close());
    },
  };

  return (
    <Index
      {...states}
      {...methods}
    />
  );
};

export default Light;