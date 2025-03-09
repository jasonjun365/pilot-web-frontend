import React from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import SearchIcon from '@/resource/file/svg/special/Search';
import SearchFormText from '@/components/UI/Search/SearchFormText';
import SearchForm from '@/components/UI/Search/SearchForm';
import DefaultPropTypes from '@/libs/types/SearchForm';
import ViewStylePropTypes from '@/libs/types/ViewStyle';

interface PropTypes extends DefaultPropTypes, ViewStylePropTypes {

}

const View: React.FC<PropTypes> = ({ getMixinStyle, ...props }) => {
  const { t } = useTranslation();

  const schema = yup.object({
    phrase: yup.string().max(100),
  });

  const { control, handleSubmit: hookSubmit, reset, getValues, setValue, trigger, formState: { errors } } = useForm<any>({ resolver: yupResolver(schema) });
  
  const formProps = { ...props, errors, hookSubmit, reset, setValue, trigger };
  const itemProps = { ...formProps, control, schema, getValues, initialData: props.initialData };

  return (
    <div className={getMixinStyle('layout')}>
      <SearchForm {...formProps}>
        <SearchFormText
          {...itemProps}
          name="phrase"
          icon={<SearchIcon />}
          placeholder={t('placeholder.searchYourLivestream')}
          width="198px"
        />
      </SearchForm>
    </div>
  );
};

export default View;
