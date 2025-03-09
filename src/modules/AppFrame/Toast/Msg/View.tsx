import React from 'react';
import { Alert, AlertTitle } from '@mui/material';
import ViewStylePropTypes from '@/libs/types/ViewStyle';

interface DataType {
  open: boolean
  title?: string
  msg: string
  type: 'error' | 'warning' | 'info' | 'success'
}

interface PropTypes extends ViewStylePropTypes { // states
  data: DataType
  i: number
}

interface PropTypes { // methods
  handleClose: (i: number) => void
}

const Toast: React.FC<PropTypes> = ({ data, i, handleClose, getMixinStyle }) => {
  const onClose = (i: number) => {
    handleClose(i);
  };

  return (
    <div className={getMixinStyle('layout', [data.open ? '' : 'close'])}>
      <Alert
        variant='filled'
        severity={data.type}
        className={getMixinStyle('alert')}
        onClose={() => onClose(i)}
      >
        {data.title && <AlertTitle>{data.title}</AlertTitle>}
        <div className={getMixinStyle('msg')}>{data.msg}</div>
      </Alert>
    </div>
  );
};

export default Toast;