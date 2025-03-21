import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import ViewStylePropTypes from '@/libs/types/ViewStyle';
import {Button} from '@mui/material';
import {useTranslation} from 'react-i18next';
import Actions from '@/store/actions';
import Head from './Head';
import * as yup from 'yup';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import Input2 from '@/components/UI/Form/Input2';

interface PropTypes extends ViewStylePropTypes {
  loading: boolean,
  handleSubmit: (values: any) => void
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

const View: React.FC<PropTypes> = ({loading, handleSubmit, getMixinStyle, ...props}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const schema = yup.object({
    username: yup.string()
      .label('Username')
      .trim()
      .required(t('form.auth.validate.required')),
    email: yup.string()
      .label('Email')
      .trim()
      .required(t('form.auth.validate.required')),
    password: yup.string()
      .label('Password')
      .trim()
      .required(t('form.auth.validate.required')),
  });
  const {
    control,
    handleSubmit: hookSubmit,
    reset,
    getValues,
    setValue,
    trigger,
    formState: { errors }
  } = useForm<any>({ resolver: yupResolver(schema) });

  const formProps = { errors, hookSubmit, reset, trigger };
  const itemProps = { control, errors, schema, getValues, setValue, trigger, initialData: initialValues };
  const isError = Object.keys(errors).length > 0;

  const onSubmit = async (values: any) => {
    console.log('login: ', values);
    handleSubmit(values);
  };

  return (
    <>
      <Head/>
      <div className={getMixinStyle('layout')}>
        <div><h3>Register</h3></div>
        <form>
          <div className={getMixinStyle('formRow')}>
            <div className={getMixinStyle('label', ['title'])}>
              Username
            </div>
            <Input2
              {...itemProps}
              placeholder="Please enter your username."
              name='username'
              variant="outlined"
              fullWidth
              autoFocus={false}
            />
          </div>
          <div className={getMixinStyle('formRow')}>
            <div className={getMixinStyle('label', ['title'])}>
              Email
            </div>
            <Input2
              {...itemProps}
              placeholder="Please enter your email."
              name='email'
              variant="outlined"
              fullWidth
              autoFocus={false}
            />
          </div>
          <div className={getMixinStyle('formRow')}>
            <div className={getMixinStyle('label', ['title'])}>
              Password
            </div>
            <Input2
              {...itemProps}
              placeholder="Please enter your password."
              name='password'
              variant="outlined"
              fullWidth
              autoFocus={false}
              type="password"
            />
          </div>
          <div className={getMixinStyle('formActions')} key="btn-submit">
            <div style={{display: 'none'}}>
              <Input2
                {...itemProps}
                name='role'
                type="hidden"
              />
            </div>
            <Button
              size="small"
              variant="contained"
              color="primary"
              type="submit"
              disableElevation
              onClick={hookSubmit(onSubmit)}
            >{t('form.auth.button.login')}</Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default View;
