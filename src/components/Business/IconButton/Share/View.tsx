import React from 'react';
import {useTranslation} from 'react-i18next';
import {Tooltip} from '@mui/material';
import AnyPopover from '@/components/UI/AnyPopover';
import ShareAnyPopOver from '@/components/Business/AnyPopover/Share/List';
import ShareIcon from '@/resource/file/svg/special/Share';
import ViewStylePropTypes from '@/libs/types/ViewStyle';

interface PropTypes extends ViewStylePropTypes { // states
  postId: string
}

const View: React.FC<PropTypes> = ({ postId }) => {
  const { t } = useTranslation();

  return (
    <AnyPopover
      transitionDuration="auto"
      label={(
        <Tooltip title={t('btn.share')} placement="bottom">
          <div>
            <ShareIcon onClick={() => {}} />
          </div>
        </Tooltip>
      )}
    >
      <ShareAnyPopOver postId={postId} />
    </AnyPopover>
  );
};

export default View;
