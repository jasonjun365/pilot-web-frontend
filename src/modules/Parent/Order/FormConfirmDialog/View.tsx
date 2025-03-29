import React from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import DefaultPropTypes from '@/components/UI/Form/Types';
import DialogConfirmForm from '@/components/UI/Dialog/ConfirmForm';
import ViewStylePropTypes from '@/libs/types/ViewStyle';

interface PropTypes extends DefaultPropTypes, ViewStylePropTypes {

}

const Form: React.FC<PropTypes> = ({ getMixinStyle, ...props }) => {
  const { t } = useTranslation();

  const schema = yup.object({});

  const { control, handleSubmit: hookSubmit, reset, getValues, setValue, trigger, formState: { errors } } = useForm<any>({ resolver: yupResolver(schema) });

  const formProps = { errors, hookSubmit, reset, trigger };
  const itemProps = { control, errors, schema, getValues, setValue, trigger, initialData: props.data };

  const moreThanOne = getValues('postIds')?.length > 1;

  return (
    <DialogConfirmForm {...props} {...formProps} submitText="yes" closeText="no" cancelText="no">
      <div className={getMixinStyle('layout')}>
        <div className={getMixinStyle('title')}>
          {props.title}
        </div>
        <div className={getMixinStyle('main')}>
          Are you sure to pay this order?
        </div>
      </div>
    </DialogConfirmForm>
  );
};

export default Form;
