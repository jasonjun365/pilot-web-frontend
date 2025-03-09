import React from 'react';
import CircularLoading from '@/components/UI/Loading/Circular';
import ViewStylePropTypes from '@/libs/types/ViewStyle';

interface PropTypes extends ViewStylePropTypes { // status
  data: any
  loading: boolean
  children: React.ReactNode
  btns?: React.ReactNode
  submitText?: string
  closeText?: string
  cancelText?: string
  thunkName: string
  submitDisabled?: boolean
}

interface PropTypes { // methods
  hookSubmit: (v?: any, n?: any) => any
  handleSubmit: (v: any) => void
  handleClose: () => void
}

const Form: React.FC<PropTypes> = ({ data, children, getMixinStyle, ...props }) => {
  return (
    <form>
      <CircularLoading mask={true} loading={props.loading}>
        <div className={getMixinStyle('layout')}>
          {children}
        </div>
      </CircularLoading>
    </form>
  );
};

export default Form;
