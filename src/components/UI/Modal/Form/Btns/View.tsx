import React from 'react';
import {ajaxCancelMap} from '@/store/createAsyncThunks';
import PureButton from '@/components/UI/Button/PureButton';
import BigButton from '@/components/UI/Button/BigButton';
import ViewStylePropTypes from '@/libs/types/ViewStyle';

interface PropTypes extends ViewStylePropTypes { // stream
  loading: boolean
  btns?: React.ReactNode
  submitText?: string
  closeText?: string
  cancelText?: string
  enableCloseBtn?: boolean
  enableCancelBtn?: boolean
  submitDisabled?: boolean
  thunkName: string
}

interface PropTypes { // methods
  hookSubmit: (v?: any, n?: any) => any
  handleSubmit: (v: any) => void
  handleClose: () => void
}

const Btns: React.FC<PropTypes> = ({
  loading,
  btns,
  submitText = 'done',
  closeText = 'cancel',
  cancelText = 'cancel',
  enableCloseBtn = false,
  enableCancelBtn = false,
  submitDisabled = true,
  thunkName,
  hookSubmit,
  handleSubmit,
  handleClose,
  getMixinStyle
}) => {
  const onSubmit = async (data: any) => {
    handleSubmit(data);
  };

  const handleCancel = () => {
    ajaxCancelMap[thunkName] && ajaxCancelMap[thunkName]();
  };

  return (
    <div className={getMixinStyle('layout')}>
      {btns}
      {enableCloseBtn && loading && (
        <PureButton
          label={cancelText}
          type='button'
          color='secondary'
          onClick={handleCancel}
        />
      )}
      {enableCancelBtn && !loading && (
        <PureButton
          label={closeText}
          disabled={loading}
          autoFocus
          onClick={handleClose}
        />
      )}
      <BigButton
        label={submitText}
        disabled={loading || submitDisabled}
        type='submit'
        themeColor={submitDisabled ? 'default' : 'primary'}
        onClick={hookSubmit(onSubmit)}
      />
    </div>
  );
};

export default Btns;
