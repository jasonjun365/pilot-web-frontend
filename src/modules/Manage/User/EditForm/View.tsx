import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import ViewStylePropTypes from '@/libs/types/ViewStyle';
import * as yup from 'yup';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import Input2 from '@/components/UI/Form/Input2';
import Select2 from '@/components/UI/Form/Select2';
import DialogForm from '@/components/UI/Dialog/DialogForm';
import {IUser} from '@/libs/types/entities';

interface PropTypes extends ViewStylePropTypes {
  data: IUser | null
  title: string
  open: boolean
  loading: boolean
  formType: 'NEW' | 'EDIT' | ''
}

interface PropTypes {
  handleSubmit: (data: any) => void
  handleDelete: () => void
  handleClose: () => void
}

const View: React.FC<PropTypes> = ({ formType, handleDelete, getMixinStyle, ...props }) => {
  const { t } = useTranslation();

  const initData = {
    userId: props.data?.userId,
    username: props.data?.username,
    email: props.data?.email,
    password: props.data?.password,
    roleIdList: props.data?.roleIdList,
    status: props.data?.status,
  };
  const schema = yup.object({
    username: yup.string()
      .label('Username')
      .trim()
      .required('Required'),
    email: yup.string()
      .label('Email')
      .trim()
      .email('Is not a valid email address?')
      .required('Required'),
    // password: yup.string()
    //   .label('Password')
    //   .trim()
    //   .required('Required'),
  });

  const { control, handleSubmit: hookSubmit, reset, getValues, setValue, trigger, formState: { errors } } = useForm<any>({ resolver: yupResolver(schema) });

  const formProps = { errors, hookSubmit, reset, trigger };
  const itemProps = { control, errors, schema, getValues, setValue, trigger, initialData: initData };
  const isError = Object.keys(errors).length > 0;

  return (
    <DialogForm
      {...props}
      {...formProps}
      submitDisabled={isError}
      enableKeydown={true}
      submitText="save"
    >
      <div className={getMixinStyle('layout')}>
        <div className={getMixinStyle('label', ['title'])}>
          Name
        </div>
        <Input2
          {...itemProps}
          placeholder="Please enter username."
          name='username'
          variant="outlined"
          fullWidth
          maxTextSize={64}
          autoFocus={false}
        />
        <div className={getMixinStyle('label', ['title'])}>
          Email
        </div>
        <Input2
          {...itemProps}
          placeholder="Please enter email."
          name='email'
          variant="outlined"
          fullWidth
          maxTextSize={256}
          autoFocus={false}
        />
        {formType === 'NEW' && (
          <>
            <div className={getMixinStyle('label', ['title'])}>
              Password
            </div>
            <Input2
              {...itemProps}
              placeholder="Please enter password."
              name='password'
              variant="outlined"
              fullWidth
              maxTextSize={256}
              autoFocus={false}
              type='password'
            />
          </>
        )}
        <div className={getMixinStyle('label', ['title'])}>
          Role
        </div>
        <Select2
          {...itemProps}
          placeholder="Please select role."
          name='roleIdList'
          variant="outlined"
          multiple={true}
          fullWidth
          maxTextSize={256}
          autoFocus={false}
          data={[
            {key: 4, value: 4, label: 'Administrator'},
            {key: 5, value: 5, label: 'Teacher'},
            {key: 6, value: 6, label: 'Parent'},
          ]}
        />
        <div className={getMixinStyle('label', ['title'])}>
          Status
        </div>
        <Select2
          {...itemProps}
          placeholder="Please select status."
          name='status'
          variant="outlined"
          fullWidth
          maxTextSize={256}
          autoFocus={false}
          data={[
            {key: 1, value: 1, label: 'Enable'},
            {key: 0, value: 0, label: 'Disable'},
          ]}
        />
      </div>
    </DialogForm>
  );
};

export default View;
