import React from 'react';
import { Controller } from 'react-hook-form';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import ViewStylePropTypes from '@/libs/types/ViewStyle';
import Error from '../Error';
import Required from '../Required';
import ArrowIcon from './arrow';

interface PropTypes extends ViewStylePropTypes { // states
  control: any
  errors: any
  schema: any
  name: string
  label?: string
  data: any[]
  keyLabelValue?: string[]
  hasNone?: boolean
  variant?: 'outlined' | 'standard' | 'filled' | undefined
  initialData?: any
  defaultValue?: string
  multiple?: boolean
  fullWidth?: boolean
  minWidth?: string | number
  margin?: 'dense' | 'none' | undefined
  autoFocus?: boolean
}

interface PropTypes { // methods
  setValue: (v: any, n: any) => any
  trigger: (v?: any) => any
  onChange?: (e?: any) => any
}

const CSelect: React.FC<PropTypes> = ({
  control,
  errors,
  schema,
  name,
  label='',
  data,
  keyLabelValue=['label', 'value'],
  hasNone,
  variant='standard',
  initialData={},
  defaultValue='',
  multiple=false,
  fullWidth,
  minWidth,
  margin,
  autoFocus,
  setValue,
  trigger,
  onChange,
  getMixinStyle
}) => {
  const isRequired = schema.fields[name] ? schema.fields[name].exclusiveTests.required : false;

  const handleChange = (event: any) => {
    const { target: { value } } = event;
    setValue(name, value);
    if (Object.keys(errors).length)
      trigger(name);
    if (onChange)
      onChange(event);
  };

  const noneData = !hasNone ? [] : [{
    [keyLabelValue[0]]: 'None',
    [keyLabelValue[1]]: '',
  }];

  const options = noneData.concat(data);

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue || initialData[name] || ''}
      render={({ field }) => <FormControl fullWidth={fullWidth} sx={{ minWidth: fullWidth ? 0 : minWidth }} error={Boolean(errors[name])} size='small'>
        <InputLabel variant={variant} margin={margin !== 'none' ? margin : undefined}>
          <>
            {label}
            {isRequired && <Required />}
          </>
        </InputLabel>
        <Select 
          {...field}
          label={label}
          variant={variant}
          margin={margin}
          onChange={handleChange}
          multiple={multiple}
          autoFocus={autoFocus}
          size='small'
          autoWidth
          IconComponent={ArrowIcon}
          classes={{
            icon: getMixinStyle('selectSvgIcon')
          }}
        >
          {options.map((it: any) => (
            <MenuItem key={it[keyLabelValue[0]]} value={it[keyLabelValue[1]]}>
              {it[keyLabelValue[0]]}
            </MenuItem>
          ))}
        </Select>
        <Error errors={errors} name={name} label={label} />
      </FormControl>}
    />
  );
};

export default CSelect;
