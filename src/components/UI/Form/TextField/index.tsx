import React, { memo } from 'react';
import {
  TextField,
  FilledTextFieldProps,
  Typography,
  FormControl,
} from '@mui/material';
import { FieldInputProps, FormikProps, ErrorMessage } from 'formik';

interface InputType {
  label?: string
}

interface IProps extends FilledTextFieldProps {
  field: FieldInputProps<InputType>
  form: FormikProps<any>
}

const FormTextField: React.FC<IProps> = ({ form, field, label, ...props }) => {
  return (
    <FormControl fullWidth>
      {label && (
        <Typography
          variant="h4"
          component="h4"
          sx={{ fontSize: 13, color: 'Text.TEXT_PRIMARY', mb: 1 }}
        >
          {label}
        </Typography>
      )}
      <TextField
        fullWidth
        size="small"
        {...props}
        hiddenLabel
        onChange={form.handleChange(field.name)}
        onBlur={form.handleBlur(field.name)}
        error={!!(form.touched[field.name] && form.errors[field.name])}
        sx={{ fontSize: 20 }}
      />
      <ErrorMessage name={field.name} />
    </FormControl>
  );
};

export default memo(FormTextField);
