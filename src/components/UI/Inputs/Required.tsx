import React from 'react';
import { Box } from '@mui/material';

const Required: React.FC = () => {
  return (
    <Box component='span' sx={{ color: 'red' }}>*</Box>
  );
};

export default Required;
