import React from 'react';
import { Popper, ClickAwayListener, Grow } from '@mui/material';

interface PropTypes { // states
  className?: string
  open?: boolean
  anchorEl: HTMLElement | null
  children: any
  placement?: 'auto-end' | 'auto-start' | 'auto' | 'bottom-end' | 'bottom-start' | 'bottom' | 'left-end' | 'left-start' | 'left' | 'right-end' | 'right-start' | 'right' | 'top-end' | 'top-start' | 'top'
  disablePortal?: boolean
}

interface PropTypes { // methods
  handleClose: () => void
}

const CustomPopper: React.FC<PropTypes> = ({ className, open, anchorEl, placement, disablePortal=true, children, handleClose }) => {
  return (
    <Popper
      className={className}
      open={Boolean(open) && Boolean(anchorEl)}
      anchorEl={anchorEl}
      placement={placement}
      disablePortal={disablePortal}
      transition={Boolean(anchorEl)}
    >
      {({ TransitionProps }) => (
        <Grow {...TransitionProps}>
          <div>
            <ClickAwayListener onClickAway={handleClose}>
              {children}
            </ClickAwayListener>
          </div>
        </Grow>
      )}
    </Popper>
  );
};

export default CustomPopper;
