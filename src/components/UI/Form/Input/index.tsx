import React, { memo } from 'react';
import { Input as InputBase, InputProps } from '@mui/material';
import { FieldInputProps, FormikProps, ErrorMessage } from 'formik';

import { InputContainer } from './style';

interface InputType {}

interface IProps extends InputProps, InputType {
  field: FieldInputProps<InputType>
  form: FormikProps<any>
}

const Input: React.FC<IProps> = ({ form, field, ...props }) => {
  // const classes = useStyles();
  return (
    <InputContainer>
      <InputBase
        fullWidth
        // className={classes.input}
        {...props}
        onChange={form.handleChange(field.name)}
        onBlur={form.handleBlur(field.name)}
        error={!!(form.touched[field.name] && form.errors[field.name])}
      />
      <ErrorMessage name={field.name} />
    </InputContainer>
  );
};

export default memo(Input);
