import React from 'react';
import { useTranslation } from 'react-i18next';
import { ajaxCancelMap } from '@/store/createAsyncThunks';
import BigButton from '@/components/UI/Button/BigButton';
import ViewStylePropTypes from '@/libs/types/ViewStyle';

interface PropTypes extends ViewStylePropTypes { // status
  loading: boolean
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

const Btns: React.FC<PropTypes> = ({
  loading,
  btns,
  submitText='confirm',
  closeText='notYet',
  cancelText='notYet',
  thunkName,
  submitDisabled,
  hookSubmit,
  handleSubmit,
  handleClose, 
  getMixinStyle
}) => {
  const { t } = useTranslation();

  const onSubmit = async (data: any) => {
    handleSubmit(data);
  };

  const handleCancel = () => {
    ajaxCancelMap[thunkName] && ajaxCancelMap[thunkName]();
  };
  
  return (
    <div className={getMixinStyle('layout')}>
      {btns}
      {loading ? (
        <BigButton
          label={t('btn.' + cancelText)}
          type='button'
          themeColor='secondary'
          className={getMixinStyle('cancel')}
          onClick={handleCancel}
        />
      ) : (
        <BigButton
          label={t('btn.' + closeText)}
          disabled={loading}
          themeColor='default'
          className={getMixinStyle('cancel')}
          onClick={handleClose}
        />
      )}
      <BigButton
        label={t('btn.' + submitText)}
        disabled={loading || submitDisabled}
        type='submit'
        themeColor='secondary'
        onClick={hookSubmit(onSubmit)}
      />
    </div>
  );
};

export default Btns;
