import React from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Text from '@/components/UI/Inputs/Text';
import DialogConfirmForm from '@/components/UI/Dialog/ConfirmForm';
import DefaultPropTypes from '@/components/UI/Form/Types';
import ViewStylePropTypes from '@/libs/types/ViewStyle';

interface PropTypes extends DefaultPropTypes, ViewStylePropTypes {

}

const Form: React.FC<PropTypes> = ({ getMixinStyle, ...props }) => {
  const { t } = useTranslation();

  const schema = yup.object({
    postIds: yup.array().of(yup.string()).required(),
  });

  const { control, handleSubmit: hookSubmit, reset, getValues, setValue, trigger, formState: { errors } } = useForm<any>({ resolver: yupResolver(schema) });

  const formProps = { errors, hookSubmit, reset, trigger };
  const itemProps = { control, errors, schema, getValues, setValue, trigger, initialData: props.data };

  const moreThanOne = getValues('postIds')?.length > 1;

  return (
    <DialogConfirmForm {...props} {...formProps} submitText="delete" closeText="cancel" cancelText="cancel">
      <div className={getMixinStyle('layout')}>
        <div className={getMixinStyle('title')}>
          {t('btn.deleteVideo' + (moreThanOne ? 's' : ''))}
        </div>
        <div className={getMixinStyle('main')}>
          {t('tips.deleteVideo' + (moreThanOne ? 's' : ''), {
            number: getValues('postIds')?.length
          })}
        </div>
      </div>
      <div style={{ display: 'none' }}>
        <Text {...itemProps} name='postIds' />
      </div>
    </DialogConfirmForm>
  );
};

export default Form;
