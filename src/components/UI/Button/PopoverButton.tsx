import React, { useEffect } from 'react';
import { Popover } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import PureButton from '@/components/UI/Button/PureButton';

interface OriginPropTypes {
  vertical: number | 'top' | 'center' | 'bottom',
  horizontal: number | 'center' | 'left' | 'right'
};

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
  btnSx?: any
}

interface PropTypes {
  hasBack?: boolean
  backLabel?: React.ReactNode
  backColor?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | undefined
  popoverSx?: any
  childrenSx?: any
  transitionDuration?: 'auto' | number | { appear?: number, enter?: number, exit?: number }
  anchorOrigin?: OriginPropTypes
  transformOrigin?: OriginPropTypes
  children: React.ReactElement | React.ReactElement[]
  parentparams?: {
    label: React.ReactNode
    anchorEl: HTMLButtonElement
    setShow: (v: boolean) => void
    setAnchorEl: (v: null) => void
    handleRootClose?: () => void
  }
}

const PopoverButton: React.FC<PropTypes> = ({ parentparams, btnSx, hasBack, backLabel, backColor='warning', popoverSx, childrenSx, transitionDuration=0, anchorOrigin={ vertical: 'bottom', horizontal: 'left' }, transformOrigin={ vertical: 'top', horizontal: 'left' }, children, ...props }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const [show, setShow] = React.useState<boolean>(true);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
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
      <PureButton {...props} sx={btnSx} onClick={handleClick} />
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={parentparams?.handleRootClose ? parentparams.handleRootClose : handleClose}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
        transitionDuration={transitionDuration}
        marginThreshold={0}
        style={{ display: show ? 'block' : 'none' }}
        sx={{'&>div>*': { ...childrenSx }, ...popoverSx}}
      >
        {hasBack && <PureButton color={backColor} startIcon={<ArrowBackIosNewIcon fontSize='small' />} label={backLabel || parentparams?.label} onClick={handleClose} />}
        {React.Children.map(children, child => React.cloneElement(child as React.ReactElement, { parentparams: { label: props.label, anchorEl, setShow, setAnchorEl, handleRootClose: !parentparams ? handleClose : parentparams?.handleRootClose ? parentparams.handleRootClose : null } }))}
      </Popover>
    </>
  );
};

export default PopoverButton;
