import React from 'react';
import { FormControl, FormHelperText } from '@mui/material';

interface PropTypes { // states
  errors: any
  name: string
  label: string
}

const Error: React.FC<PropTypes> = ({ errors, name, label }) => {
  return (
    <FormControl error={Boolean(errors[name])}>
      <FormHelperText sx={{ mx: 0 }}>
        {errors[name] && (
          <>
            {label}
            {errors[name].message}
          </>
        )}
      </FormHelperText>
    </FormControl>
  );
};

export default Error;
