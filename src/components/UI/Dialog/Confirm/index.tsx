import React from 'react';
import { useTranslation } from 'react-i18next';
import { Dialog, Box, Divider } from '@mui/material';
import PureButton from '@/components/UI/Button/PureButton';
import CloseIcon from '@/components/UI/Dialog/Icons/CloseIcon';

interface PropTypes { // states
  label: React.ReactNode
  title?: React.ReactNode
  content?: React.ReactNode
  variant?: 'text' | 'outlined' | 'contained'
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | undefined
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
}

interface PropTypes { // methods
  onClick: () => void
}

const DialogConfirmBtn: React.FC<PropTypes> = ({ label, title='', content, variant, color, size='small', disabled, onClick }) => {
  const { t } = useTranslation();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <PureButton
        variant={variant} 
        label={label}
        color={color}
        size={size}
        disabled={disabled}
        onClick={handleClickOpen}
      />
      <Dialog open={open} onClose={handleClose}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', m: 1, mr: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CloseIcon onClose={handleClose} />
            {title || `${t('btn.confirm')} ?`}
          </Box>
        </Box>
        <Divider />
        <Box sx={{ mx: 2, my: 1 }}>
          {content}
        </Box>
        <Divider />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mx: 2, my: 1, '>*': { ml: '8px !important' } }}>
          <PureButton label={t('btn.confirm')} onClick={() => {
            onClick();
            handleClose();
          }} />
          <PureButton
            label={t('btn.close')}
            variant='outlined'
            autoFocus
            onClick={handleClose}
          />
        </Box>
      </Dialog>
    </>
  );
};

export default DialogConfirmBtn;
