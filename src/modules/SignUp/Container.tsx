import React, {useCallback, useEffect} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import Actions from '@/store/actions';
import {useNavigate} from 'react-router-dom';

const {
  thunks: userThunks
} = Actions.basic.user;

interface PropTypes { // states
  View: React.FC<any>
}

interface PropTypes { // methods

}

const Special: React.FC<PropTypes> = ({ View }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((state: any) => state.basic.user);

  const states = {
    loading: userState.loading,
    signupStatus: userState.signupStatus,
  };

  const methods = {
    handleSubmit: (values: any) => {
      dispatch(userThunks.signup({params: values}));
    },
    navToSignin: () => {
      alert('Sign up successfully.');
      // navigate('/signin', { replace: true });
      window.location.href = '/signin';
    }
  };

  useEffect(() => {
    if (states.signupStatus) {
      methods.navToSignin();
    }
  }, [states.signupStatus]);
  
  return (
    <View
      {...states}
      {...methods}
    />
  );
};

export default Special;