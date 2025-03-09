import React from 'react';
import { IconButton, Menu, MenuItem, ListItemIcon } from '@mui/material';

interface ItemsPropTypes {
  icon?: React.ReactNode
  label?: React.ReactNode
  disabled?: boolean
  unClose?: boolean
  onClick?: (v?: any) => any
}

interface PropTypes {
  icon: React.ReactNode
  label?: React.ReactNode
  color?: 'inherit' | 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | undefined
  disabled?: boolean
  size?: 'small' | 'medium' | undefined
  items: ItemsPropTypes[]
}

const IconMenuButton: React.FC<PropTypes> = ({ icon, label, color='inherit', disabled, size='small', items }) => {
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
      <IconButton
        color={color}
        disabled={disabled}
        size={size}
        onClick={handleMenu}
      >
        {icon}
      </IconButton>
      {label}
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

export default IconMenuButton;
