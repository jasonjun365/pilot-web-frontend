import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@mui/material/styles';
import PropTypes from '../interface';
import style from './index.module.scss';

const Svg: React.FC<PropTypes> = ({ width=16, height=17 }) => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const color = 'var(--' + mode + '-system-blue-500-m)';

  return (
    <div
      className={clsx(style.layout)} 
    >
      <svg width={width} height={height} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M3.686 11.836a.94.94 0 0 0-.689.289.924.924 0 0 0-.288.688.94.94 0 0 0 .288.69.953.953 0 0 0 .69.28.954.954 0 0 0 .688-.28.953.953 0 0 0 .281-.69.937.937 0 0 0-.28-.688.94.94 0 0 0-.69-.29zm8.867-9.578c0 .03-.01.057-.03.082l-2.11 2.096c-.03.464.12.861.451 1.192.326.331.726.482 1.2.452l2.096-2.104c.055-.049.107-.049.156 0l.015.023v.007l.008.015c.216.489.325.985.325 1.489 0 1.012-.36 1.879-1.082 2.6-.72.72-1.587 1.081-2.6 1.081-.365 0-.733-.059-1.103-.177L6.042 12.85a2.273 2.273 0 0 1-.704 1.637c-.46.454-1.01.681-1.652.681-.652 0-1.207-.23-1.666-.689a2.27 2.27 0 0 1-.69-1.666c0-.647.225-1.2.675-1.66.454-.454 1-.686 1.637-.696l3.837-3.837a3.623 3.623 0 0 1-.17-1.111c0-1.017.36-1.884 1.081-2.6.711-.716 1.575-1.074 2.593-1.074a3.74 3.74 0 0 1 1.488.311l.015.015h.008l.03.015c.02.024.029.051.029.081z" fill={color} />
      </svg>
    </div>
  );
};

export default Svg;