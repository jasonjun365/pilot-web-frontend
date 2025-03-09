import React from 'react';
import { useTranslation } from 'react-i18next';

interface PropTypes {
  value: string
}

const Page404: React.FC<PropTypes> = ({ value }) => {
  const { t } = useTranslation();

  return (
    <div>
      <div>{value}</div>
      {t('errPage.404')}
    </div>
  );
};

export default Page404;
