import React from 'react';
import { IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

interface PropTypes { // states
  open: boolean
  size?: 'small' | 'medium' | 'large' | undefined
}

interface PropTypes { // methods
  handleOpen: () => void
  handleClose: () => void
}

const Light: React.FC<PropTypes> = ({ open, size='small', handleOpen, handleClose }) => {
  return (
    <IconButton size={size} onClick={() => open ? handleClose() : handleOpen()}>
      {
        open ? 
          <LightModeIcon fontSize='small' color='warning' /> :
          <DarkModeIcon fontSize='small' />
      }
    </IconButton>
  );
};

export default Light;
