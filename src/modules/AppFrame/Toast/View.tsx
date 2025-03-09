import React from 'react';
import { Snackbar } from '@mui/material';
import Msg from './Msg';

interface DataType {
  open: boolean
  title: string
  msg: string
  type: 'error' | 'warning' | 'info' | 'success'
}

interface PropTypes { // states
  data: DataType[]
}

interface PropTypes { // methods
  handleClose: (i: number) => void
}

const Toast: React.FC<PropTypes> = ({ data, handleClose }) => {
  return (
    <Snackbar open={true} style={{
      maxHeight: '48vh',
      display: 'flex',
      alignItems: 'flex-end',
      overflow: 'hidden',
    }}>
      <div>
        {data.map((it: any, i: number) => (
          <Msg data={it} i={i} handleClose={handleClose} key={i} />
        ))}
      </div>
    </Snackbar>
  );
};

export default Toast;