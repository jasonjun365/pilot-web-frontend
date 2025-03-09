import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import View from './View';
import Actions from '@/store/actions';

const {
  actions: thisActions,
} = Actions.basic.toast;

const Snack: React.FC = () => {
  const dispatch = useDispatch();
  const thisState = useSelector((state: any) => state.basic.toast);
  const timers = useRef<any[]>([]);

  const states  = {
    data: thisState.data,
  };

  const methods = {
    handleClose: (i: number) => {
      dispatch(thisActions.closeData(i));
    }
  };

  useEffect(() => {
    if (thisState.data.length && thisState.data[thisState.data.length - 1].time) {
      timers.current.push(setTimeout(() => {
        dispatch(thisActions.closeData(thisState.data.length - 1));
      }, thisState.data[thisState.data.length - 1].time));
    } else if (thisState.data.length === 0){
      timers.current.forEach((it: any) => {
        clearTimeout(it);
      });
      timers.current = [];
    }
  }, [thisState.data.length]);

  return (
    <View
      {...states}
      {...methods}
    />
  );
};

export default Snack;