import React from 'react';
import { useTranslation } from 'react-i18next';
import AnyPopover from '@/components/UI/AnyPopover';
import List from './List';
import ViewStylePropTypes from '@/libs/types/ViewStyle';
import LeftBackArrowIcon from '@/resource/file/svg/special/LeftBackArrow';

interface PropTypes extends ViewStylePropTypes {
  postId: string
}

const View: React.FC<PropTypes> = ({ postId, getMixinStyle, ...props }) => {
  const { mode: _mode, style: _style, mediaStyle: _mediaStyle, breakpoints: _breakpoints, ...parentProps } = props;

  const { t } = useTranslation();

  return (
    <AnyPopover
      {...parentProps}
      hasBack
      backLabel={(
        <div className={getMixinStyle('back-label')}>
          <LeftBackArrowIcon />
          {t('btn.share')}
        </div>
      )}
      label={(
        <div className={getMixinStyle('menu')}>
          <div className={getMixinStyle('left')}>
            <div className={getMixinStyle('label')}>
              {t('btn.share')}
            </div>
          </div>
        </div>
      )}
    >
      <List postId={postId} />
    </AnyPopover>
  );
};

export default View;
