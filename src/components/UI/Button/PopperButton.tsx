import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Popper, Fade, Box, IconButton } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material//HighlightOff';
import PureButton from '@/components/UI/Button/PureButton';

interface PropTypes { // states
  label: React.ReactNode
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  disabled?: boolean
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | undefined
  size?: 'small' | 'medium' | 'large' | undefined
  variant?: 'contained' | 'text' | 'outlined' | undefined
  autoFocus?: boolean
  type?: 'button' | 'submit' | 'reset' | undefined
  sx?: any
}

interface PropTypes {
  placement?: 'auto-end' | 'auto-start' | 'auto' | 'bottom-end' | 'bottom-start' | 'bottom' | 'left-end' | 'left-start' | 'left' | 'right-end' | 'right-start' | 'right' | 'top-end' | 'top-start' | 'top'
  modifiers?: any
  children: React.ReactElement
}

const PopperButton: React.FC<PropTypes> = ({ placement='bottom', modifiers, children, ...props }) => {
  const location = useLocation();
  
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  useEffect(() => {
    setAnchorEl(null);
  }, [location]);
  
  const open = Boolean(anchorEl);

  return (
    <>
      <PureButton {...props} onClick={handleClick} />
      <Popper
        open={open}
        anchorEl={anchorEl}
        placement={placement}
        modifiers={modifiers}
        disablePortal
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={100}>
            <Box sx={{ background: 'white', borderRadius: '5px' }}>
              <IconButton sx={{ display: 'block' }} color='secondary' onClick={() => setAnchorEl(null)}>
                <HighlightOffIcon />
              </IconButton>
              {children}
            </Box>
          </Fade>
        )}
      </Popper>
    </>
  );
};

export default PopperButton;