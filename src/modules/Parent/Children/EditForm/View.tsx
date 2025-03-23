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
import {IStudent} from '@/libs/types/entities';


interface PropTypes extends ViewStylePropTypes {
  data: IStudent | null
  title: string
  open: boolean
  loading: boolean
}

interface PropTypes {
  handleSubmit: (data: any) => void
  handleDelete: () => void
  handleClose: () => void
}

const View: React.FC<PropTypes> = ({ handleDelete, getMixinStyle, ...props }) => {
  const { t } = useTranslation();

  const schema = yup.object({
    id: yup.number(),
    name: yup.string()
      .label('Name')
      .trim()
      .required('Required'),
    email: yup.string()
      .label('Email')
      .trim()
      .email('Is not a valid email address?'),
    address: yup.string()
      .label('Address')
      .trim()
      .required('Required'),
    parentName: yup.string()
      .label('Parent Name')
      .trim()
      .required('Required'),
    parentEmail: yup.string()
      .label('Parent Email')
      .trim()
      .required('Required'),
  });

  const { control, handleSubmit: hookSubmit, reset, getValues, setValue, trigger, formState: { errors } } = useForm<any>({ resolver: yupResolver(schema) });

  const formProps = { errors, hookSubmit, reset, trigger };
  const itemProps = { control, errors, schema, getValues, setValue, trigger, initialData: props.data };
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
          placeholder="Please enter student name."
          name='name'
          variant="outlined"
          fullWidth
          autoFocus={true}
        />
        <div className={getMixinStyle('label', ['title'])}>
          Email
        </div>
        <Input2
          {...itemProps}
          placeholder="Please enter student email."
          name='email'
          variant="outlined"
          fullWidth
          autoFocus={false}
        />
        <div className={getMixinStyle('label', ['title'])}>
          Address
        </div>
        <Input2
          {...itemProps}
          placeholder="Please enter student address."
          name='address'
          variant="outlined"
          fullWidth
          autoFocus={false}
        />
        <div className={getMixinStyle('label', ['title'])}>
          Parent Name
        </div>
        <Input2
          {...itemProps}
          placeholder="Please enter student's parent name."
          name='parentName'
          variant="outlined"
          fullWidth
          autoFocus={false}
        />
        <div className={getMixinStyle('label', ['title'])}>
          Parent Email
        </div>
        <Input2
          {...itemProps}
          placeholder="Please enter student's parent email."
          name='parentEmail'
          variant="outlined"
          fullWidth
          autoFocus={false}
        />
        <div className={getMixinStyle('label', ['title'])}>
          Status
        </div>
        <Select2
          {...itemProps}
          placeholder="Please select status."
          name='enabled'
          variant="outlined"
          fullWidth
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
