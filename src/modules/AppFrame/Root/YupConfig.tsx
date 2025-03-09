import React from 'react';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';

const YupConfig: React.FC = () => {
  const { t } = useTranslation();

  yup.setLocale({
    string: {
      max: t('validate.max'),
      min: t('validate.min'),
      email: t('validate.email'),
      url: t('validate.url'),
    },
    number: {
      integer: t('validate.integer'),
      max: t('validate.numMax'),
      min: t('validate.numMin'),
    },
    mixed: {
      required: t('validate.required'),
    }
  });

  return (
    <div />
  );
};

export default YupConfig;