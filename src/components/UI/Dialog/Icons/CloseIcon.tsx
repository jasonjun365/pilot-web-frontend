import React from 'react';
import CloseIcon from '@/resource/file/svg/special/Close';

interface PropTypes { // states
  loading?: boolean
}

interface PropTypes { // methods
  onClose: () => void
}

const DialogCloseIcon: React.FC<PropTypes> = ({ loading, onClose }) => {
  return (
    <>
      <CloseIcon disabled={loading} onClick={onClose} />
      <span style={{ marginRight: 11 }} />
    </>
  );
};

export default DialogCloseIcon;
