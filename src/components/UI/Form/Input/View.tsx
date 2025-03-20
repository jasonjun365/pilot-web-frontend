import React, { memo } from 'react';
import { Input as MuiInput, InputProps } from '@mui/material';
import { FieldInputProps, FormikProps, ErrorMessage } from 'formik';
import ViewStylePropTypes from '@/libs/types/ViewStyle';

interface InputType extends ViewStylePropTypes {
  InputProps?: any
}

// @ts-ignore
interface IProps extends InputProps, InputType {
  field: FieldInputProps<InputType>
  form: FormikProps<any>
}

const Input: React.FC<IProps> = ({ form, field, getMixinStyle, ...props }) => {
  return (
    <div className={getMixinStyle('layout')}>
      <MuiInput
        fullWidth
        {...props}
        onChange={form.handleChange(field.name)}
        onBlur={form.handleBlur(field.name)}
        error={!!(form.touched[field.name] && form.errors[field.name])}
      />
      <ErrorMessage name={field.name}/>
    </div>
  );
};

export default memo(Input);
