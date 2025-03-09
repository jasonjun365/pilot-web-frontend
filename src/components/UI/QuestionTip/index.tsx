import React from 'react';
import { Tooltip } from '@mui/material';
import QuestionIcon from '@/resource/file/svg/special/Question';

interface PropTypes {
  title: string
  className?: string
  placement?: 'bottom-end' | 'bottom-start' | 'bottom' | 'left-end' | 'left-start' | 'left' | 'right-end' | 'right-start' | 'right' | 'top-end' | 'top-start' | 'top' | undefined
  arrow?: boolean
}

const Special: React.FC<PropTypes> = ({ title, className, placement='top', arrow=true }) => {
  return (
    <Tooltip title={title} placement={placement} className={className} arrow={arrow}>
      <div>
        <QuestionIcon />
      </div>
    </Tooltip>
  );
};

export default Special;
