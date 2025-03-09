import React from 'react';
import { useTranslation } from 'react-i18next';
import { ajaxCancelMap } from '@/store/createAsyncThunks';
import PureButton from '@/components/UI/Button/PureButton';
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

const Btns: React.FC<PropTypes> = ({ loading, btns, submitText='done', closeText='cancel', cancelText='cancel', thunkName, submitDisabled, hookSubmit, handleSubmit, handleClose, getMixinStyle }) => {
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
        <PureButton
          label={t('btn.' + cancelText)}
          type='button'
          color='secondary'
          className={getMixinStyle('cancel')}
          onClick={handleCancel}
        />
      ) : (
        <PureButton
          label={t('btn.' + closeText)}
          disabled={loading}
          className={getMixinStyle('cancel')}
          onClick={handleClose}
        />
      )}
      <BigButton
        label={t('btn.' + submitText)}
        disabled={loading || submitDisabled}
        type='submit'
        themeColor="primary"
        onClick={hookSubmit(onSubmit)}
      />
    </div>
  );
};

export default Btns;
