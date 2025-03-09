import React from 'react';
import { useTranslation } from 'react-i18next';
import ViewStylePropTypes from '@/libs/types/ViewStyle';
import IconButton from '@mui/material/IconButton';
import ExitToAppSharpIcon from '@mui/icons-material/ExitToAppSharp';
import PureButton from '@/components/UI/Button/PureButton';

interface PropTypes extends ViewStylePropTypes {

}

const View: React.FC<PropTypes> = ({ breakpoints, getMixinStyle }) => {
  const { t } = useTranslation();

  return (
    <div className={getMixinStyle('layout')}>
      {breakpoints.down_lg ? (
        <IconButton
          title={t('btn.backToOldVersion')}
          className={getMixinStyle('exitIconButton')}
          onClick={() => {
            window.location.href = '/streamHostSide';
          }}
        >
          <ExitToAppSharpIcon />
        </IconButton>
      ) : (
        <PureButton
          label={t('btn.backToOldVersion')}
          type="button"
          variant="outlined"
          color='inherit'
          size="medium"
          className={getMixinStyle('exitButton')}
          onClick={() => {
            window.location.href = '/streamHostSide';
          }}
        />
      )}
    </div>
  );
};

export default View;
