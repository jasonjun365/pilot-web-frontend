import React from 'react';
import { useTranslation } from 'react-i18next';
import ViewStylePropTypes from '@/libs/types/ViewStyle';

interface PropTypes extends ViewStylePropTypes {

}

const View: React.FC<PropTypes> = ({ getMixinStyle }) => {
  const { t } = useTranslation();
  
  return (
    <div className={getMixinStyle('layout')}>
      <span>{t('title.manageLivestreams')}</span>
    </div>
  );
};

export default View;
