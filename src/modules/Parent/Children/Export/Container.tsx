import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Actions from '@/store/actions';
// import {delUserInfo} from '@/libs/utils/localstorage';

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
  // const userState = useSelector((state: any) => state.basic.user);

  const states = {
    // data: userState.data,
  };

  const methods = {
    handleExportPDF: () => {
      // dispatch(lightActions[v ? 'open' : 'close']());
    },
    handleExportExcel: () => {
      // delUserInfo();
      // dispatch(userActions.removeUserSession());
      // setTimeout(() => {
      //   window.location.href = '/signin';
      // }, 500);
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