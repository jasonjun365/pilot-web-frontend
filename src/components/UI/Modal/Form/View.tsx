import React, {useEffect, useRef} from 'react';
import {useTranslation} from 'react-i18next';
import {Modal, Divider} from '@mui/material';
import CloseIcon from '@/components/UI/Dialog/Icons/CloseIcon';
import Form from './Form';
import ViewStylePropTypes from '@/libs/types/ViewStyle';

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

interface PropTypes extends ViewStylePropTypes { // stream
  className: string
  enableCloseIcon?: boolean
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
  enableCloseBtn?: boolean
  enableCancelBtn?: boolean
  submitDisabled?: boolean
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined
  openReset?: boolean
  thunkName: string
  container?: HTMLElement
  BackdropProps?: object
  enableKeydown?: boolean
}

interface PropTypes { // methods
  reset: (v?: any, n?: any) => void
  hookSubmit: (v?: any, n?: any) => any
  trigger: (v?: any) => any
  handleSubmit: (v: any) => void
  handleClose: () => void
}

const ModalForm: React.FC<PropTypes> = ({
  className,
  title,
  errors,
  open,
  maxWidth = 'lg',
  openReset = true,
  reset,
  trigger,
  getMixinStyle,
  container,
  style,
  BackdropProps,
  enableKeydown,
  ...props
}) => {
  const {i18n} = useTranslation();
  const refModalContent = useRef(null);

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
    if (enableKeydown && refModalContent.current) {
      refContent = refModalContent.current;
      document.addEventListener('keydown', listenerOnKeydown);
    }
  }, [refModalContent.current]);

  return (
    <Modal className={className} open={open} onClose={onClose} disableAutoFocus={true}
      container={container} style={style} BackdropProps={BackdropProps} closeAfterTransition={false}>
      <div className={getMixinStyle('layout')}>
        <div className={getMixinStyle('title')}>
          {props.enableCloseIcon && (<CloseIcon loading={props.loading} onClose={onClose}/>)}
          {title}
        </div>
        <Divider/>
        <Form refModalContent={refModalContent} {...props} />
      </div>
    </Modal>
  );
};

export default ModalForm;
