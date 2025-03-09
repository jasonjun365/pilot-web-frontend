import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Actions from '@/store/actions';
import {delUserInfo} from '@/libs/utils/localstorage';

const {
  actions: lightActions
} = Actions.basic.light;

const {
  actions: userActions,
} = Actions.basic.user;

interface PropTypes {
  Index: React.FC<any>
}

const Container: React.FC<PropTypes> = ({Index}) => {
  const dispatch = useDispatch();
  const userState = useSelector((state: any) => state.basic.user);
  const lightState = useSelector((state: any) => state.basic.light);

  const states = {
    data: userState.data,
    lightOpen: lightState.open,
  };

  const methods = {
    changeLightOpen: (v: boolean) => {
      dispatch(lightActions[v ? 'open' : 'close']());
    },
    logoutHandle: () => {
      delUserInfo();
      dispatch(userActions.removeUserSession());
      setTimeout(() => {
        window.location.href = '/signin';
      }, 500);
    }
  };

  return (
    <Index
      {...states}
      {...methods}
    />
  );
};

export default Container;