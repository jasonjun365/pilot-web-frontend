import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import ViewStylePropTypes from '@/libs/types/ViewStyle';
import CloseIcon from '@/components/UI/Dialog/Icons/CloseIcon';
import Form from './Form';
import Buttons from './Buttons';

const MOV = 3;
let refContent: any = null;
const listenerOnKeydown = (e: any) => {
  if (e && refContent) {
    const scrollTop = refContent.scrollTop;
    if (e?.key === 'ArrowDown' || e?.keyCode === 40) {
      if ((scrollTop + MOV + refContent.clientHeight) <= refContent.scrollHeight + MOV) {
        refContent.scrollTo({top: scrollTop + MOV, behavior: 'smooth'});
      }
    } else if (e?.key === 'ArrowUp' || e?.keyCode === 38) {
      if (scrollTop > 0) {
        refContent.scrollTo({top: scrollTop - MOV, behavior: 'smooth'});
      }
    }
  }
};

interface PropTypes extends ViewStylePropTypes { // status
  title: string
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
  enableKeydown?: boolean
  scroll?: 'paper' | 'body' | undefined
}

interface PropTypes { // methods
  reset: (v?: any, n?: any) => void
  hookSubmit: (v?: any, n?: any) => any
  trigger: (v?: any) => any
  handleSubmit: (v: any) => void
  handleClose: () => void
}

const DialogForm: React.FC<PropTypes> = ({
  title,
  errors,
  open,
  maxWidth='lg',
  openReset=true,
  enableKeydown=false,
  scroll='paper',
  reset,
  trigger,
  getMixinStyle,
  ...props
}) => {
  const { i18n } = useTranslation();
  const refDialogContent = useRef(null);

  const onClose = () => {
    !props.loading && props.handleClose();
    refContent = null;
    document.removeEventListener('keydown', listenerOnKeydown);
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

  useEffect(() => {
    if (enableKeydown && refDialogContent.current) {
      refContent = refDialogContent.current;
      document.addEventListener('keydown', listenerOnKeydown);
    }
  }, [refDialogContent.current]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={maxWidth}
      scroll={scroll}
      PaperProps={{
        classes: {
          root: getMixinStyle('dialogPaperRoot')
        }
      }}
      BackdropProps={{
        classes: {
          root: getMixinStyle('backdropRoot'),
        }
      }}
    >
      <DialogTitle className={getMixinStyle('dialogTitle')}>
        <div className={getMixinStyle('title')}>
          <CloseIcon loading={props.loading} onClose={onClose} />
          {title}
        </div>
      </DialogTitle>
      <DialogContent ref={refDialogContent} className={getMixinStyle('dialogContent')}>
        <Form {...props} />
      </DialogContent>
      <DialogActions className={getMixinStyle('dialogActions')}>
        <Buttons {...props} />
      </DialogActions>
    </Dialog>
  );
};

export default DialogForm;
