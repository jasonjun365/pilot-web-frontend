import React from 'react';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import { Button } from '@mui/material';
import ViewStylePropTypes from '@/libs/types/ViewStyle';
import {useTranslation} from 'react-i18next';
import Actions from '@/store/actions';
import Head from './Head';
import CircularLoading from '@/components/UI/Loading/Circular';
import Input2 from '@/components/UI/Form/Input2';

interface Values {
  username: string;
  password: string;
}

interface PropTypes extends ViewStylePropTypes {
  loading: boolean,
  handleSubmit: (values: Values) => void
}

const initialValues: Values = {
  username: '',
  password: '',
};

const View: React.FC<PropTypes> = ({loading, handleSubmit, getMixinStyle, ...props}) => {
  const { t } = useTranslation();

  const schema = yup.object({
    username: yup.string()
      .label('Username')
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
        <div><h3>Login</h3></div>
        <form>
          <CircularLoading mask={true} loading={loading}>
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
              <Button
                size="small"
                variant="contained"
                color="primary"
                type="submit"
                disableElevation
                onClick={hookSubmit(onSubmit)}
              >{t('form.auth.button.login')}</Button>
            </div>
          </CircularLoading>
        </form>
      </div>
    </>
  );
};

export default View;
