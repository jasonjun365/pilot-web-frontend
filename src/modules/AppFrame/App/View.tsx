import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import Version from '@/components/Business/Version';
import AppHeader from './Header';
import Menu from './Menu';
import Main from './Main';
import ViewStylePropTypes from '@/libs/types/ViewStyle';

interface PropTypes extends ViewStylePropTypes {

}

const View: React.FC<PropTypes> = ({ getMixinStyle }) => {
  const navigate = useNavigate();
  const userState = useSelector((state: any) => state.basic.user);
  const states = {
    isLogin: userState.isLogin,
    loading: userState.loading,
    roles: userState.roles,
  };

  useEffect(() => {
    if (states.isLogin) {
      if (states.roles?.includes('Administrator')) {
        navigate('/manage/user', { replace: true });
      } else if (states.roles?.includes('Parent')) {
        navigate('/children', { replace: true });
      } else {
        // navigate('/', { replace: true });
      }
    }
  }, [states.roles, states.isLogin]);

  return (
    <>
      {states.isLogin && (
        <>
          <Version />
          <AppHeader />
        </>
      )}

      <div className={getMixinStyle('layout')}>
        {states.isLogin && (
          <Menu />
        )}
        <Main />
      </div>
    </>
  );
};

export default View;
