import React, {useEffect, useState} from 'react';
import { Controller } from 'react-hook-form';
import { TextField, Input } from '@mui/material';
import ViewStylePropTypes from '@/libs/types/ViewStyle';

interface PropTypes extends ViewStylePropTypes { // states
  control: any
  errors: any
  schema: any
  name: string
  variant?: 'outlined' | 'standard' | 'filled' | undefined
  initialData?: any
  placeholder?: string
  defaultValue?: string
  multiline?: boolean
  minRows?: number
  rows?: number
  fullWidth?: boolean
  width?: string | number
  margin?: 'dense' | 'none'
  type?: 'text' | 'number' | 'password' | 'hidden'
  autoFocus?: boolean
  InputProps?: any
}

interface PropTypes { // methods
  getValues: (v: any) => any
  setValue: (v: any, n: any) => any
  trigger: (v?: any) => any
}

const Text: React.FC<PropTypes> = ({
  control,
  errors,
  schema,
  name,
  variant='standard',
  initialData={},
  placeholder='',
  defaultValue='',
  multiline=false,
  minRows=1,
  rows,
  fullWidth,
  width,
  margin,
  type='text',
  autoFocus=false,
  InputProps={},
  getValues,
  trigger,
  getMixinStyle
}) => {
  const extraInputProps = {
    ...InputProps,
    ...{
      classes: {
        notchedOutline: getMixinStyle('notchedOutline')
      }
    }
  };
  const extraAttr = {
    helperText: errors[name]?.message ? (
      <span>{errors[name].message}</span>
    ) : undefined,
  };

  const onInput = () => {
    // setTimeout(() => trigger(name), 0);
  };

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue || initialData[name] || ''}
      render={({ field }) => (
        <div className={getMixinStyle('layout')}>
          <TextField
            {...field}
            {...extraAttr}
            placeholder={placeholder || undefined}
            error={Boolean(errors[name])}
            variant={variant}
            multiline={multiline}
            minRows={minRows}
            rows={rows}
            fullWidth={fullWidth}
            sx={{ width }}
            className={getMixinStyle('text')}
            margin={margin}
            type={type}
            autoFocus={autoFocus}
            InputProps={extraInputProps}
            size='small'
            onInput={onInput}
          />
        </div>
      )}
    />
  );
};

export default Text;
