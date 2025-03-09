import React, { useEffect } from 'react';
import { Popover } from '@mui/material';

interface OriginPropTypes {
  vertical: number | 'top' | 'center' | 'bottom',
  horizontal: number | 'center' | 'left' | 'right'
};

interface PropTypes { // states
  containerRef?: any
  label: React.ReactNode
}

interface PropTypes {
  hasBack?: boolean
  backLabel?: React.ReactNode
  transitionDuration?: 'auto' | number | { appear?: number, enter?: number, exit?: number }
  anchorOrigin?: OriginPropTypes
  transformOrigin?: OriginPropTypes
  children?: any
  parentparams?: {
    label: React.ReactNode
    anchorEl: HTMLButtonElement
    setShow: (v: boolean) => void
    setAnchorEl: (v: null) => void
    handleRootClose?: () => void
  }
  onClick?: (v?: any) => any
}

const AnyPopover: React.FC<PropTypes> = ({ containerRef, label, parentparams, hasBack, backLabel, transitionDuration=0, anchorOrigin={ vertical: 'bottom', horizontal: 'right' }, transformOrigin={ vertical: 'top', horizontal: 'right' }, onClick: extraClick, children }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const [show, setShow] = React.useState<boolean>(true);

  const handleClick = (event: any) => {
    if (parentparams?.anchorEl) {
      setAnchorEl(parentparams.anchorEl);
    } else {
      setAnchorEl(event.currentTarget);
    }
    if (parentparams?.setShow) {
      parentparams?.setShow(false);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
    if (parentparams?.setShow) {
      parentparams?.setShow(true);
    }
  };

  useEffect(() => {
    if (anchorEl === null)
      setShow(true);
  }, [anchorEl]);

  const open = Boolean(anchorEl);

  return (
    <>
      <div onClick={(e: any) => {
        children ? handleClick(e) : parentparams?.handleRootClose?.();
        extraClick && extraClick();
      }}>{label}</div>
      <Popover
        open={open}
        anchorEl={anchorEl}
        container={containerRef?.current || document.body}
        onClose={parentparams?.handleRootClose ? parentparams.handleRootClose : handleClose}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
        transitionDuration={transitionDuration}
        marginThreshold={0}
        style={{ display: show ? 'block' : 'none' }}
        PaperProps={{
          sx: {
            background: 'none',
          }
        }}
      >
        {hasBack && <div style={{ cursor: 'pointer' }} onClick={handleClose}>{backLabel || parentparams?.label}</div>}
        {children && React.Children.map(children, child => {
          if (child) {
            return React.cloneElement(child as React.ReactElement, { parentparams: { label, anchorEl, setShow, setAnchorEl, handleRootClose: !parentparams ? handleClose : parentparams?.handleRootClose ? parentparams.handleRootClose : null } });
          }
        })}
      </Popover>
    </>
  );
};

export default AnyPopover;
