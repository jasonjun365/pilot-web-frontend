import React from 'react';
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
    loading: userState.loading
  };

  const methods = {
    handleSubmit: (values: any) => {
      const {username, password} = values;
      const bodyFormData = new FormData();
      bodyFormData.append('username', username);
      bodyFormData.append('password', password);
      console.log('login: ', bodyFormData);
      dispatch(userThunks.login({
        data: bodyFormData,
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      }));
    },
  };
  
  return (
    <View
      {...states}
      {...methods}
    />
  );
};

export default Special;