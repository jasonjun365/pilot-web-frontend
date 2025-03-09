import React from 'react';
import { ButtonGroup, ClickAwayListener, Grow, Paper, Popper, MenuItem, MenuList } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PureButton from './PureButton';

interface optionPropTypes {
  name: string
  label: React.ReactNode
  disabled?: boolean
  handleClick: (v?: any) => any
}

interface PropTypes {
  size?: 'medium' | 'small' | 'large' | undefined
  select: number
  options: optionPropTypes[]
}

const SplitBtn: React.FC<PropTypes> = ({ size='small', select, options }) => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);

  const handleMenuItemClick = (
    index: number,
  ) => {
    options[index].handleClick();
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <ButtonGroup variant='contained' ref={anchorRef} size={size}>
        <PureButton
          label={options[select]?.label}
          variant='outlined'
          onClick={handleToggle}
        />
        <PureButton
          label={<ArrowDropDownIcon />}
          onClick={handleToggle}
        />
      </ButtonGroup>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        transition
        disablePortal
        style={{ zIndex: 999 }}
      >
        {({ TransitionProps, placement }) => (
          <Grow {...TransitionProps} style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}>
            <Paper sx={{ maxHeight: 300, overflowY: 'auto' }}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option.name}
                      disabled={option.disabled}
                      selected={index === select}
                      onClick={() => handleMenuItemClick(index)}
                    >
                      {option.label}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default SplitBtn;