import React from 'react';
import { useTranslation } from 'react-i18next';
import AnyPopover from '@/components/UI/AnyPopover';
import ShareAnyPopover from '@/components/Business/AnyPopover/Share';
import OptionsIcon from '@/resource/file/svg/special/Options';
import ViewStylePropTypes from '@/libs/types/ViewStyle';

interface PropTypes extends ViewStylePropTypes { // states
  postId: string
  disabledRemove: boolean
}

interface PropTypes {
  handleChannelFormShow: () => void
  handleDeleteFormShow: () => void
}

const View: React.FC<PropTypes> = ({ postId, disabledRemove, handleChannelFormShow, handleDeleteFormShow, getMixinStyle }) => {
  const { t } = useTranslation();

  return (
    <AnyPopover
      transitionDuration="auto"
      label={(
        <OptionsIcon onClick={() => {}} />
      )}
    >
      <AnyPopover onClick={handleChannelFormShow} label={(
        <div className={getMixinStyle('btn')}>{t('btn.edit')}</div>
      )} />
      <ShareAnyPopover postId={postId} />
      <AnyPopover onClick={handleDeleteFormShow} label={(
        !disabledRemove && (
          <div className={getMixinStyle('btn')}>{t('btn.delete')}</div>
        )
      )} />
    </AnyPopover>
  );
};

export default View;
