import React from 'react';
import { useTranslation } from 'react-i18next';
import BigButton from '@/components/UI/Button/BigButton';
import ViewStylePropTypes from '@/libs/types/ViewStyle';
import {Dialog, DialogTitle, DialogContent, DialogActions} from '@mui/material';
import CloseIcon from '@/components/UI/Dialog/Icons/CloseIcon';

interface PropTypes extends ViewStylePropTypes { // status
  label: React.ReactNode
  title?: React.ReactNode
  content?: React.ReactNode
  cancelText?: string
  confirmText?: string
  displayCloseIcon?: boolean
  themeColor: 'primary' | 'secondary'
  variant?: 'text' | 'outlined' | 'contained'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
}

interface PropTypes { // methods
  onCancel: () => void
  onConfirm: () => void
}

const DialogConfirmBtn: React.FC<PropTypes> = ({
  label,
  title='',
  content,
  cancelText,
  confirmText,
  displayCloseIcon=false,
  themeColor,
  variant,
  size='small',
  disabled=false,
  onCancel,
  onConfirm,
  getMixinStyle,
}) => {
  const { t } = useTranslation();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    setOpen(false);
    onConfirm && onConfirm();
  };

  const handleCancel = () => {
    setOpen(false);
    onCancel && onCancel();
  };
  
  return (
    <>
      <BigButton
        themeColor={disabled ? 'default' : themeColor}
        label={label}
        size={size}
        variant={variant}
        type="button"
        disabled={disabled}
        onClick={handleClickOpen}
      />
      <Dialog
        open={open}
        classes={{
          paper: getMixinStyle('dialog-layout')
        }}
        BackdropProps={{
          classes: {
            root: getMixinStyle('backdropRoot'),
          }
        }}
        onClose={handleClose}
      >
        <DialogTitle className={getMixinStyle('dialog-title')}>
          {displayCloseIcon && (<CloseIcon onClose={handleClose} />)}
          {title || `${t('btn.confirm')} ?`}
        </DialogTitle>
        <DialogContent className={getMixinStyle('dialog-content')}>
          {content}
        </DialogContent>
        <DialogActions className={getMixinStyle('dialog-actions')}>
          <BigButton
            label={cancelText || t('btn.cancel')}
            type='button'
            themeColor='default'
            className={getMixinStyle('cancel')}
            onClick={handleCancel}
          />
          <BigButton
            label={confirmText || t('btn.confirm')}
            type='button'
            themeColor='secondary'
            onClick={handleConfirm}
          />
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DialogConfirmBtn;
