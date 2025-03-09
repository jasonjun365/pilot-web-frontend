import React from 'react';
import Button from './Button';
import DefaultPropTypes from '@/components/UI/Search/Interface';

interface PropTypes { // states
  initialData: any
  data: any
  loading: boolean
  children: React.ReactNode
  thunkNames: string[]
}

interface PropTypes extends DefaultPropTypes { // methods
  reset: (v?: any, n?: any) => void
  hookSubmit: (v?: any, n?: any) => any
  setValue: (v: any, n: any) => any
  handleGetData: (v: any) => void
}

const Form: React.FC<PropTypes> = ({ children, ...props }) => {
  return (
    <form>
      <div>{children}</div>
      <Button {...props} />
    </form>
  );
};

export default Form;
