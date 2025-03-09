import React from 'react';
import { Box, Dialog, Divider } from '@mui/material';
import CircularLoading from '@/components/UI/Loading/Circular';
import CloseIcon from '@/components/UI/Dialog/Icons/CloseIcon';

interface PropTypes { // states
  title: string
  open: boolean
  loading?: boolean
  children: React.ReactNode
  btns?: React.ReactNode
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined
  disableBackdropClick?: boolean
  disableEscapeKeyDown?: boolean
  classes?: any
  BackdropProps?: any
}

interface PropTypes { // methods
  handleClose: () => void
}

const ReadOnlyDialog: React.FC<PropTypes> = ({ title, open, loading=false, btns, maxWidth='md', disableEscapeKeyDown=false, disableBackdropClick=false, classes, BackdropProps, children, handleClose }) => {
  const onClose = () => {
    !loading && handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={(_e, v) => {
        if (v === 'backdropClick' && disableBackdropClick) return;
        if (v === 'escapeKeyDown' && disableEscapeKeyDown) return;

        onClose();
      }}
      maxWidth={maxWidth}
      classes={classes}
      BackdropProps={BackdropProps}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', m: 1, mr: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <CloseIcon loading={loading} onClose={onClose} />
          {title}
        </Box>
        {btns && <div>{btns}</div>}
      </Box>
      <Divider />
      <CircularLoading mask={true} loading={loading}>
        <div>
          {children}
        </div>
      </CircularLoading>
    </Dialog>
  );
};

export default ReadOnlyDialog;
