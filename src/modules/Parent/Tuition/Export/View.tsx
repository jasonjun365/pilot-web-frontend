import React from 'react';
import { useTranslation } from 'react-i18next';
import AnyPopover from '@/components/UI/AnyPopover';
import ViewStylePropTypes from '@/libs/types/ViewStyle';

interface PropTypes extends ViewStylePropTypes { // states

}

interface PropTypes { // methods
  handleExportPDF: () => void
  handleExportExcel: () => void
}

const View: React.FC<PropTypes> = ({ handleExportPDF, handleExportExcel, getMixinStyle }) => {
  const { t, i18n } = useTranslation();

  return (
    <AnyPopover
      transitionDuration="auto"
      label={(
        <div className={getMixinStyle('layout')}>
          Export
        </div>
      )}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
    >
      <AnyPopover
        hasBack
        backLabel={(
          <div className={getMixinStyle('back-label')}>PDF</div>
        )}
        label={(
          <div className={getMixinStyle('menu')}>
            <div className={getMixinStyle('left')}>PDF</div>
          </div>
        )}
        onClick={() => {
          handleExportPDF();
        }}
      />
      <AnyPopover
        hasBack
        backLabel={(
          <div className={getMixinStyle('back-label')}>Excel</div>
        )}
        label={(
          <div className={getMixinStyle('menu')}>
            <div className={getMixinStyle('left')}>Excel</div>
          </div>
        )}
        onClick={() => {
          handleExportExcel();
        }}
      />
    </AnyPopover>
  );
};

export default View;
