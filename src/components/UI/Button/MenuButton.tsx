import React from 'react';
import { Menu, MenuItem, ListItemIcon } from '@mui/material';
import PureButton from './PureButton';

interface ItemsPropTypes {
  icon?: React.ReactNode
  label?: React.ReactNode
  disabled?: boolean
  unClose?: boolean
  onClick?: (v?: any) => any
}

interface PropTypes {
  label?: React.ReactNode
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | undefined
  disabled?: boolean
  size?: 'small' | 'medium' | 'large' | undefined
  variant?: 'contained' | 'text' | 'outlined' | undefined
  items: ItemsPropTypes[]
}

const IconMenu: React.FC<PropTypes> = ({ label, color='inherit', disabled, size='small', variant='outlined', items }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (fn: (() => void) | null) => {
    setAnchorEl(null);
    fn && fn();
  };

  return (
    <>
      <PureButton
        label={label}
        color={color}
        disabled={disabled}
        size={size}
        variant={variant}
        onClick={handleMenu}
      />
      <Menu open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={() => handleClose(null)}>
        {items.map((it: any, i: number) => 
          it && <MenuItem disabled={it.disabled} onClick={() => it.unClose ? it.onClick && it.onClick() : handleClose(it.onClick)} key={i}>
            {
              it.icon && <ListItemIcon>
                {it.icon}
              </ListItemIcon>
            }
            {it.label}
          </MenuItem>
        )}
      </Menu>
    </>
  );
};

export default IconMenu;
