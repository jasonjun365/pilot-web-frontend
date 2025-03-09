import React from 'react';
import { useTranslation } from 'react-i18next';
import ViewStylePropTypes from '@/libs/types/ViewStyle';

interface PropTypes extends ViewStylePropTypes {
  show: boolean
}

interface PropTypes {
  handleUpdate: () => void
}

const Special: React.FC<PropTypes> = ({ show, handleUpdate, getMixinStyle }) => {
  const { t } = useTranslation();

  return (
    <div className={getMixinStyle('layout', [show ? 'show' : ''])}>
      {t('version.update')} <b onClick={handleUpdate}>{t('version.refresh')}</b>
    </div>
  );
};

export default Special;