import React from 'react';
import PropTypes from '../interface';
import {useTheme} from '@mui/material/styles';

const Svg: React.FC<PropTypes> = ({ width=20, height=20 }) => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const color = 'var(--' + mode + '-neutral-900-m)';

  return (
    <div>
      <svg width={width} height={height} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.5584 3.84797C12.8667 3.53966 12.8667 3.03979 12.5584 2.73148C12.2501 2.42317 11.7502 2.42317 11.4419 2.73148L2.24367 11.9297C2.09351 12.0735 2 12.2759 2 12.5001C2 12.6047 2.02031 12.7045 2.05721 12.7958C2.09575 12.8914 2.15378 12.9811 2.23131 13.0586L11.4419 22.2692C11.7502 22.5775 12.2501 22.5775 12.5584 22.2692C12.8667 21.9609 12.8667 21.461 12.5584 21.1527L4.69534 13.2896H21.2107C21.6467 13.2896 22.0002 12.9362 22.0002 12.5001C22.0002 12.0641 21.6467 11.7107 21.2107 11.7107H4.69573L12.5584 3.84797Z" fill={color} />
      </svg>
    </div>
  );
};

export default Svg;