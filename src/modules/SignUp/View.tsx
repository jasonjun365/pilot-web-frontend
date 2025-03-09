import React, {useCallback, useEffect, useMemo} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import ViewStylePropTypes from '@/libs/types/ViewStyle';
import {Field, Form, Formik} from 'formik';
import {Button, FormLabel, Input as MuiInput} from '@mui/material';
import {Input} from '@/components/UI';
import * as Yup from 'yup';
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
  email: string;
  password: string;
  role: string;
}

const initialValues: Values = {
  username: '',
  email: '',
  password: '',
  role: 'parent'
};

const View: React.FC<PropTypes> = ({getMixinStyle, ...props}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const userState = useSelector((state: any) => state.basic.user);

  const states = {
    signupStatus: userState.signupStatus,
  };

  const validationSchema = useMemo(() => Yup.object().shape({
    username: Yup.string().trim().required(t('form.auth.validate.required')),
    email: Yup.string().trim().required(t('form.auth.validate.required')),
    password: Yup.string().trim().required(t('form.auth.validate.required')),
  }), [t]);

  const onSubmit = useCallback((values: any) => {
    console.log('values', values);
    dispatch(userThunks.signup({params: values}));
  }, []);

  const navToSignin = useCallback(() => {
    // navigate('/signin', { replace: true });
    window.location.href = '/signin';
  }, []);

  useEffect(() => {
    if (states.signupStatus) {
      window.location.href = '/signin';
    }
  }, [states.signupStatus]);

  return (
    <>
      <Head/>
      <div className={getMixinStyle('layout')}>
        <div><h3>Register</h3></div>
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
                <FormLabel>Email</FormLabel>
                <Field
                  placeholer="Please enter your username."
                  name="email"
                  label="Email"
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
                >{t('form.auth.button.submit')}</Button>
              </div>

              <Field name="role" type='hidden'/>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default View;
