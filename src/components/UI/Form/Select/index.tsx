import React, { useCallback, useEffect, useMemo, memo } from 'react';
import {
  FormControl,
  Select as MuiSelect,
  MenuItem,
  SelectProps as MuiSelectProps,
} from '@mui/material';
import { FieldInputProps, FormikProps, ErrorMessage } from 'formik';
import {IOptionType} from '@/libs/types/Form';

interface SelectProps {
  options: IOptionType[]
  onCustomChange?: (e: any, name: string) => void;
}

interface IProps extends MuiSelectProps, SelectProps {
  field: FieldInputProps<SelectProps>
  form: FormikProps<any>
}

const Select: React.FC<IProps> = ({ field, form, options = [], onCustomChange, ...rest }) => {
  const optionsList = useMemo(() => {
    return options.map(({ value, label }) => (
      <MenuItem value={value} key={value}>
        {label}
      </MenuItem>
    ));
  }, [options]);

  const handleChange = useCallback((e:any) => {
    form.handleChange(field.name)(e);
    if (onCustomChange) {
      onCustomChange(e, field.name);
    }
  }, [form]);

  return (
    <FormControl fullWidth>
      <MuiSelect
        size="small"
        {...rest}
        onChange={handleChange}
        value={form.values[field.name]}
        error={!!(form.touched[field.name] && form.errors[field.name])}
        displayEmpty
      >
        {optionsList}
      </MuiSelect>
      <ErrorMessage name={field.name} />
    </FormControl>
  );
};

export default memo(Select);


