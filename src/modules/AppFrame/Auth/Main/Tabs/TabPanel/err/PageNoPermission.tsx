import React from 'react';
import { useTranslation } from 'react-i18next';

interface PropTypes {
  value: string
}

const PageNoPermission: React.FC<PropTypes> = ({ value }) => {
  const { t } = useTranslation();

  return (
    <div>
      <div>{value}</div>
      {t('errPage.permission')}
    </div>
  );
};

export default PageNoPermission;
