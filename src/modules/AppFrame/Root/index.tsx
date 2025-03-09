import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import getFilterMenuDate from './getFilterMenuDate';
import {getUserInfo} from '@/libs/utils/localstorage';
import View from './View';
import Actions from '@/store/actions';

const {
  actions: menuActions,
} = Actions.basic.menu;

const {
  actions: userActions,
  thunks: userThunks
} = Actions.basic.user;

const Root: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((state: any) => state.basic.user);
  const userInfo = getUserInfo();

  const states = {
    isLogin: userState.isLogin,
    loading: userState.loading,
    role: userState.role,
  };

  useEffect(() => {
    dispatch(userActions.checkUserSession(userInfo));
  }, []);

  useEffect(() => {
    console.log('Role: ', states.role);
    const filterMenuData = getFilterMenuDate(states.role);
    console.log('Menu: ', filterMenuData);
    if (filterMenuData.length) {
      dispatch(menuActions.setData(filterMenuData));
    } else {
      const msg = t('tips.notFound');
      dispatch({ type: 'basic/toast/addData', payload: { msg, type: 'error', time: 0 }});
    }
    if (states.isLogin) {
      if (states.role === 'parent') {
        navigate('/children', { replace: true });
      } else {
        navigate('/', { replace: true });
      }
    } else {
      console.log(window.location.pathname);
      // navigate(window.location.pathname, { replace: true });
      // navigate('/signin', { replace: true });
    }
  }, [states.role, states.isLogin]);

  useEffect(() => {
    if (location.pathname === '/index.html') {
      navigate('/', { replace: true });
    }
  }, []);
  
  return (
    <View
      {...states}
    />
  );
};

export default Root;