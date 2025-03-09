import React from 'react';
import {useTranslation} from 'react-i18next';
import { Divider } from '@mui/material';
import CircularLoading from '@/components/UI/Loading/Circular';
import Btns from '../Btns';
import ViewStylePropTypes from '@/libs/types/ViewStyle';

interface PropTypes extends ViewStylePropTypes { // stream
  data: any
  loading: boolean
  children: React.ReactNode
  btns?: React.ReactNode
  submitText?: string
  closeText?: string
  cancelText?: string
  enableCloseBtn?: boolean
  enableCancelBtn?: boolean
  submitDisabled?: boolean
  thunkName: string
  refModalContent?: any
}

interface PropTypes { // methods
  hookSubmit: (v?: any, n?: any) => any
  handleSubmit: (v: any) => void
  handleClose: () => void
}

const Form: React.FC<PropTypes> = ({ data, refModalContent, children, getMixinStyle, ...props }) => {
  const {t} = useTranslation();

  return (
    <form>
      <CircularLoading mask={true} loading={props.loading}>
        <div ref={refModalContent} className={getMixinStyle('layout')}>
          {children}
        </div>
      </CircularLoading>
      <Divider />
      <Btns {...props} submitText={t('btn.done')} />
    </form>
  );
};

export default Form;
