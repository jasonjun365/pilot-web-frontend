import React from 'react';
import { useTranslation } from 'react-i18next';
import SplitButton from '@/components/UI/Button/SplitButton';
import data from '@/resource/data/language';

const Language: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <SplitButton size='small' select={data.findIndex((itt: any) => itt.code === i18n.language)} options={data.map((it: any) => ({
      ...it,
      disabled: it.code === i18n.language,
      handleClick: () => changeLanguage(it.code),
    }))} />
  );
};

export default Language;