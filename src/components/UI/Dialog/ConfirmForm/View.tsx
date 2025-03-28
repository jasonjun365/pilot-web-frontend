import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Dialog } from '@mui/material';
import Form from './Form';
import ViewStylePropTypes from '@/libs/types/ViewStyle';

interface PropTypes extends ViewStylePropTypes { // status
  data: any
  errors: any
  open: boolean
  loading: boolean
  children: React.ReactNode
  btns?: React.ReactNode
  submitText?: string
  closeText?: string
  cancelText?: string
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined
  openReset?: boolean
  thunkName: string
  submitDisabled?: boolean
}

interface PropTypes { // methods
  reset: (v?: any, n?: any) => void
  hookSubmit: (v?: any, n?: any) => any
  trigger: (v?: any) => any
  handleSubmit: (v: any) => void
  handleClose: (type?: string) => void
}

const DialogForm: React.FC<PropTypes> = ({ errors, open, maxWidth='xs', openReset=true, reset, trigger, getMixinStyle, ...props }) => {
  const { i18n } = useTranslation();

  const onClose = () => {
    !props.loading && props.handleClose('dialogEvent');
  };

  useEffect(() => {
    if (openReset && open)
      reset();
  }, [open]);

  useEffect(() => {
    if (Object.keys(errors).length) {
      trigger();
    }
  }, [i18n.language]);

  return (
    <Dialog open={open} onClose={onClose} maxWidth={maxWidth} PaperProps={{ style: { borderRadius: 14 }} }>
      <div className={getMixinStyle('layout')}>
        <Form {...props} />
      </div>
    </Dialog>
  );
};

export default DialogForm;
