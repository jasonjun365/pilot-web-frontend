import React, {useEffect, useState} from 'react';
import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';
import ViewStylePropTypes from '@/libs/types/ViewStyle';
import { getEditorLength } from '@/libs/utils/index';

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
  margin?: 'dense' | 'none' | 'normal' | undefined
  type?: 'text' | 'number'
  autoFocus?: boolean
  maxTextSize: number
  InputProps?: any
}

interface PropTypes { // methods
  getValues: (v: any) => any
  setValue: (v: any, n: any) => any
  trigger: (v?: any) => any
  setSchemaMaxSize?: (v: number) => any
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
  autoFocus,
  InputProps={},
  getValues,
  trigger,
  maxTextSize,
  setSchemaMaxSize,
  getMixinStyle
}) => {
  const max = setSchemaMaxSize ? maxTextSize : schema.fields[name]?.tests?.[0]?.OPTIONS?.params?.max;
  const [nowNum, setNowNum] = useState<number>(0);
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
    setTimeout(() => trigger(name), 0);
  };

  useEffect(() => {
    if (setSchemaMaxSize) {
      getEditorLength(getValues(name) || '', (n) => {
        setNowNum(n);
        if (n > max) {
          setSchemaMaxSize(1);
        } else {
          setSchemaMaxSize(maxTextSize);
        }
        setTimeout(() => trigger(name), 20);
      });
    } else {
      setNowNum((getValues(name) || '').length);
      setTimeout(() => trigger(name), 20);
    }
  }, [getValues(name)]);

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
            FormHelperTextProps={{
              classes: {
                root: getMixinStyle('helpTextRoot')
              }
            }}
          />
          <span className={getMixinStyle('number', [errors[name] ? 'error' : ''])}>{nowNum}/{max}</span>
        </div>
      )}
    />
  );
};

export default Text;
