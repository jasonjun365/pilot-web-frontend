import React, { useRef } from 'react';
import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';
import { ajaxCancelMap } from '@/store/createAsyncThunks';
import CloseIcon from '@/resource/file/svg/special/Close';
import ViewStylePropTypes from '@/libs/types/ViewStyle';

interface PropTypes extends ViewStylePropTypes { // states
  data: any
  control: any
  errors: any
  schema: any
  name: string
  icon?: React.ReactNode
  placeholder: string
  variant?: 'outlined' | 'standard' | 'filled' | undefined
  initialData?: any
  defaultValue?: string
  fullWidth?: boolean
  width?: string | number
  margin?: 'dense' | 'none' | 'normal' | undefined
  type?: 'text' | 'number'
  autoFocus?: boolean
  InputProps?: any
  thunkNames: string[]
}

interface PropTypes { // methods
  hookSubmit: (v?: any, n?: any) => any
  getValues: (v: any) => any
  setValue: (v: any, n: any) => any
  trigger: (v?: any) => any
  handleGetData: (v: any) => void
}

const Text: React.FC<PropTypes> = ({ data: searchForm, control, errors, name, icon, placeholder, variant='standard', initialData={}, defaultValue='', fullWidth, width, margin, type='text', autoFocus, InputProps={}, thunkNames, hookSubmit, setValue, trigger, handleGetData, getMixinStyle }) => {
  const editRef = useRef<any>(null);

  const onInput = () => {
    setTimeout(() => {
      trigger(name);
      hookSubmit(onSubmit)();
    }, 0);
  };

  const handleFocus = () => {
    editRef.current.children[0].children[0].focus();
  };

  const onSubmit = async (data: any) => {
    thunkNames.forEach((thunkName: string) => {
      ajaxCancelMap[thunkName] && ajaxCancelMap[thunkName]();
    });
    const formData = { ...searchForm, ...data, page: 1, size: searchForm.size };
    handleGetData(formData);
  };

  const handleClear = () => {
    setValue(name, '');
    handleFocus();
    onInput();
  };

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue || initialData[name] || ''}
      render={({ field }) => (
        <div className={getMixinStyle('layout')}>
          {icon}
          <div className={getMixinStyle('text')}>
            {field.value.length === 0 && (
              <div className={getMixinStyle('empty')} onClick={handleFocus}>{placeholder}</div>
            )}
            <TextField
              {...field}
              ref={editRef}
              error={Boolean(errors[name])}
              variant={variant}
              fullWidth={fullWidth}
              sx={{ width }}
              margin={margin}
              type={type}
              autoFocus={autoFocus}
              InputProps={InputProps}
              onInput={onInput}
              size='small'
            />
          </div>
          <div className={getMixinStyle('clear')}>
            {field.value.length > 0 && (
              <CloseIcon width={24} height={24} onClick={handleClear}/>
            )}
          </div>
        </div>
      )}
    />
  );
};

export default Text;
