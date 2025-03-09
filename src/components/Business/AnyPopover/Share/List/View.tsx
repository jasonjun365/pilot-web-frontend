import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { TextCopy } from '@/libs/utils/index';
import AnyPopover from '@/components/UI/AnyPopover';
import data from '@/resource/data/share';
import SvgIcon from '@/resource/file/svg/share';
import CopyLinkIcon from '@/resource/file/svg/share/list/CopyLink';
import ViewStylePropTypes from '@/libs/types/ViewStyle';

interface PropTypes extends ViewStylePropTypes {
  postId: string
  className?: string
}

interface PropTypes {
  handleClose?: () => void
}

const Share: React.FC<PropTypes> = ({ handleClose, postId, className, getMixinStyle, ...props }) => {
  const { mode: _mode, style: _style, mediaStyle: _mediaStyle, breakpoints: _breakpoints, ...parentProps } = props;

  const { t } = useTranslation();
  const dispatch = useDispatch();

  const shareUrl = window.location.origin + '/post/' + postId;

  const handleCopyLink = () => {
    handleClose?.();
    TextCopy(shareUrl);
    const title = t('share.copyLink');
    const msg = shareUrl;
    dispatch({ type: 'basic/toast/addData', payload: { title, msg, type: 'success' }});
  };

  const handleOpenWindow = (url: string) => {
    handleClose?.();
    window.open(url);
  };

  return (
    <>
      {data.map((it: any) => (
        <AnyPopover
          {...parentProps}
          key={it.name}
          onClick={() => handleOpenWindow(it.getUrl(shareUrl))}
          label={(
            <div className={getMixinStyle('menu')}>
              <div className={getMixinStyle('left')}>
                <SvgIcon type={it.name} isColorMode={true} />
                <div className={getMixinStyle('label')}>
                  {it.name === 'Email' ? t('share.shareIn', {name: it.name}) : t('share.shareOn', {name: it.name})}
                </div>
              </div>
            </div>
          )}
        />
      ))}
      <AnyPopover
        {...parentProps}
        onClick={handleCopyLink}
        label={(
          <div className={getMixinStyle('menu')}>
            <div className={getMixinStyle('left')}>
              <CopyLinkIcon />
              <div className={getMixinStyle('label')}>
                {t('share.copyLink')}
              </div>
            </div>
          </div>
        )}
      />
    </>
  );
};

export default Share;
