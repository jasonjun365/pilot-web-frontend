import React, {useCallback, useMemo} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import { Input } from '@/components/UI';
import { Button, FormLabel } from '@mui/material';
import * as Yup from 'yup';
import {useNavigate} from 'react-router-dom';
import ViewStylePropTypes from '@/libs/types/ViewStyle';
import {useTranslation} from 'react-i18next';
import Actions from '@/store/actions';
import Head from './Head';


const {
  thunks: userThunks
} = Actions.basic.user;

interface PropTypes extends ViewStylePropTypes {

}

interface Values {
  username: string;
  password: string;
}

const initialValues: Values = {
  username: '',
  password: '',
};

const View: React.FC<PropTypes> = ({getMixinStyle, ...props}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validationSchema = useMemo(() => Yup.object().shape({
    username: Yup.string().trim().required(t('form.auth.validate.required')),
    password: Yup.string().trim().required(t('form.auth.validate.required')),
  }), [t]);

  const onSubmit = useCallback((values: any) => {
    console.log('values', values);
    dispatch(userThunks.signin({params: values}));
  }, []);

  const navToSignup = useCallback(() => {
    // navigate('/signup', { replace: true });
    window.location.href = '/signup';
  }, []);

  return (
    <>
      <Head/>
      <div className={getMixinStyle('layout')}>
        <div><h3>Login</h3></div>
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={onSubmit}
        >
          {({errors, touched}) => (
            <Form>
              <div className={getMixinStyle('formRow')}>
                <FormLabel>Username</FormLabel>
                <Field
                  placeholer="Please enter your username."
                  name="username"
                  label="Username"
                  component={Input}
                />
              </div>
              <div className={getMixinStyle('formRow')}>
                <FormLabel>Password</FormLabel>
                <Field
                  placeholer="Please enter your password."
                  name="password"
                  label="Password"
                  type="password"
                  component={Input}
                />
              </div>
              <div className={getMixinStyle('formActions')}>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  type="submit"
                  disableElevation
                >{t('form.auth.button.login')}</Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default View;
