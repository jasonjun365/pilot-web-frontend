import React, {useRef} from 'react';
import {Drawer, Box, Tabs, Tab} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import GridViewIcon from '@mui/icons-material/GridView';
import ViewStylePropTypes from '@/libs/types/ViewStyle';


function TabPanel(props: {index: number, value: number, children?: React.ReactNode}) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tab panel"
      hidden={value !== index}
      id={`tools-tab-${index}`}
      aria-labelledby={`tools-tab-${index}`}
      {...other}
    >
      {children}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `tools-tab-${index}`,
    'aria-controls': `tools-tab-${index}`,
  };
}

interface PropTypes extends ViewStylePropTypes { // states
  open: boolean
  tabsEnable: boolean
  tabsValue: number
  tabs: any[]
}

interface PropTypes { // methods
  setTabsValue: (v: number) => {}
  handleOpen?: () => {}
  handleClose?: () => {}

}

const View: React.FC<PropTypes> = ({
  open=true,
  tabsEnable,
  tabsValue,
  tabs,
  setTabsValue,
  handleOpen,
  handleClose,
  getMixinStyle,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [theOpen, setTheOpen] = React.useState<boolean>(open);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabsValue(newValue);
  };

  const onClickOpen = () => {
    setTheOpen(true);
    handleOpen && handleOpen();
  };

  const onClickClose = () => {
    setTheOpen(false);
    handleClose && handleClose();
  };

  return (
    <div
      ref={containerRef}
      className={getMixinStyle('layout', [theOpen ? 'open' : 'hide'])}
    >
      <div className={getMixinStyle('drawer-switch', [open ? '' : 'special'])}>
        {theOpen ? (
          <IconButton className={getMixinStyle('btnClose')} onClick={onClickClose} disableRipple={true}>
            <ArrowForwardIosIcon />
          </IconButton>
        ) : (
          <IconButton className={getMixinStyle('btnOpen')} onClick={onClickOpen} disableRipple={true}>
            <GridViewIcon />
          </IconButton>
        )}
      </div>
      <Drawer
        anchor="right"
        hideBackdrop={false}
        container={containerRef.current}
        variant="temporary"
        open={theOpen}
        onClose={handleClose}
        ModalProps={{
          disablePortal: true,
          hideBackdrop: true,
          keepMounted: true, // Better open performance on mobile.
        }}
        classes={{
          root: getMixinStyle('drawerRoot'),
          paper: getMixinStyle('drawerPaper'),
        }}
      >
        <Box className={getMixinStyle('tab-layout')}>
          <Box className={getMixinStyle('tabs-box')}>
            <Tabs
              className={getMixinStyle('tabs')}
              aria-label="Tool tabs"
              value={tabsEnable ? tabsValue : tabsEnable}
              onChange={handleChange}
            >
              {tabs.map((item, index) => (
                <Tab
                  className={getMixinStyle('tab')}
                  disableRipple={true}
                  disableTouchRipple={true}
                  disableFocusRipple={true}
                  key={item.id}
                  label={item.label}
                  {...a11yProps(index)}
                />
              ))}
            </Tabs>
          </Box>
          {tabs.map((item, index) => {
            const {TabContent} = item;
            return (
              <TabPanel key={item.id} value={tabsValue} index={index}>
                {TabContent && (<TabContent />)}
              </TabPanel>
            );
          })}
        </Box>
      </Drawer>
    </div>
  );
};

export default View;
