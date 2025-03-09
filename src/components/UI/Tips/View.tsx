import React, { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { Popper, Fade } from '@mui/material';
import ViewStylePropTypes from '@/libs/types/ViewStyle';

interface PropTypes extends ViewStylePropTypes {
  open: boolean
  content: string
  children: React.ReactNode
}

const View: React.FC<PropTypes> = ({ open, content, children, getMixinStyle }) => {
  const { t } = useTranslation();
  const location = useLocation();

  const containerRef = useRef<any>(null);
  const thisLocationRef = useRef(location.pathname);
  const timeoutNumRef = useRef(350);

  const [internalOpen, setInternalOpen] = useState(true);

  useEffect(() => {
    setInternalOpen(true);
  }, [open]);

  useEffect(() => {
    const bool = location.pathname === thisLocationRef.current;
    
    setInternalOpen(bool);
    timeoutNumRef.current = bool ? 350 : 0;
  }, [location.pathname]);

  useEffect(() => {
    const bool = containerRef.current;

    if (!bool) {
      setInternalOpen(bool);
      timeoutNumRef.current = 0;
    }
  }, [containerRef.current]);
  
  return (
    <div ref={containerRef}>
      {children}
      <Popper
        open={open && internalOpen && Boolean(containerRef.current?.offsetHeight)}
        anchorEl={containerRef.current}
        disablePortal
        transition
        style={{
          zIndex: 1,
        }}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={timeoutNumRef.current}>
            <div className={getMixinStyle('layout')}>
              <div className={getMixinStyle('main')}>
                <div className={getMixinStyle('content')}>
                  {t(content)}
                </div>
                <div className={getMixinStyle('close')} onClick={() => setInternalOpen((v) => !v)}>
                  {t('btn.close')}
                </div>
              </div>
            </div>
          </Fade>
        )}
      </Popper>
    </div>
  );
};

export default View;
