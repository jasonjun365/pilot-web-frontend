import React from 'react';
import { useTranslation } from 'react-i18next';
import languageData from '@/resource/data/language';
import themeData from '@/resource/data/theme';
import AnyPopover from '@/components/UI/AnyPopover';
import AvatarView from '@/components/UI/AvatarView';
import EmojiTrans from '@/components/UI/EmojiTrans';
import VerificationIcon from '@/resource/file/svg/special/Verification';
import LanguageIcon from '@/resource/file/svg/special/Language';
import ArrowRightIcon from '@/resource/file/svg/special/ArrowRight';
import LeftBackArrowIcon from '@/resource/file/svg/special/LeftBackArrow';
import CheckMarkIcon from '@/resource/file/svg/special/CheckMark';
import SwitchThemeIcon from '@/resource/file/svg/special/SwitchTheme';
import ViewStylePropTypes from '@/libs/types/ViewStyle';

interface PropTypes extends ViewStylePropTypes { // states
  data: any
  lightOpen: boolean
}

interface PropTypes { // methods
  changeLightOpen: (v: boolean) => void
  logoutHandle: () => void
}

const View: React.FC<PropTypes> = ({ data, lightOpen, changeLightOpen, logoutHandle, getMixinStyle }) => {
  const { t, i18n } = useTranslation();

  return (
    <AnyPopover
      transitionDuration="auto"
      label={(
        <div className={getMixinStyle('layout')}>
          <div className={getMixinStyle('left')}>
            <div className={getMixinStyle('nicknameBox')}>
              <div className={getMixinStyle('nickname')}>
                <EmojiTrans text={data.username} />
              </div>
              <div className={getMixinStyle('icon')}>
                {data.roles && (
                  <VerificationIcon />
                )}
              </div>
            </div>
            <div className={getMixinStyle('username')}>
              {data.username}
            </div>
          </div>
          <div className={getMixinStyle('right')}>
            <AvatarView src="" size={40} />
          </div>
        </div>
      )}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
    >
      <AnyPopover
        hasBack
        backLabel={(
          <div className={getMixinStyle('back-label')}>
            <LeftBackArrowIcon />
            {t('label.language')}
          </div>
        )}
        label={(
          <div className={getMixinStyle('menu')}>
            <div className={getMixinStyle('left')}>
              <LanguageIcon />
              <div className={getMixinStyle('label')}>
                {t('label.language')}: {languageData.find((it: any) => it.code === i18n.language)?.label}
              </div>
            </div>
            <ArrowRightIcon />
          </div>
        )}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <div className={getMixinStyle('tips')} style={{display: 'none'}}>
          {t('tips.changeLanguageInfo')}
        </div>
        {languageData.map((it: any) => (
          <AnyPopover key={it.code} onClick={() => i18n.changeLanguage(it.code)} label={(<div className={getMixinStyle('btn', [it.code === i18n.language ? 'active' : ''])}>{it.label}{it.code === i18n.language && <CheckMarkIcon />}</div>)} />
        ))}
      </AnyPopover>
      <AnyPopover
        hasBack
        backLabel={(
          <div className={getMixinStyle('back-label')}>
            <LeftBackArrowIcon />
            {t('label.appearance')}
          </div>
        )}
        label={(
          <div className={getMixinStyle('menu')}>
            <div className={getMixinStyle('left')}>
              <SwitchThemeIcon />
              <div className={getMixinStyle('label')}>
                {t('label.appearance')}: {t('label.' + themeData.find((it: any) => it.open === lightOpen)?.name)}
              </div>
            </div>
            <ArrowRightIcon />
          </div>
        )}
      >
        <div className={getMixinStyle('tips')}>
          {t('tips.changeAppearanceInfo')}
        </div>
        {themeData.map((it: any) => (
          <AnyPopover key={it.name} onClick={() => changeLightOpen(it.open)} label={(<div className={getMixinStyle('btn', [it.open === lightOpen ? 'active' : ''])}>{t('label.' + it.name)}{it.open === lightOpen && <CheckMarkIcon />}</div>)} />
        ))}
      </AnyPopover>

      <AnyPopover
        hasBack
        backLabel={(
          <div className={getMixinStyle('back-label')}>
            <LeftBackArrowIcon />
            Logout
          </div>
        )}
        label={(
          <div className={getMixinStyle('menu')}>
            <div className={getMixinStyle('left')}>
              <SwitchThemeIcon />
              Logout
            </div>
          </div>
        )}
        onClick={() => {
          logoutHandle();
        }}
      />
    </AnyPopover>
  );
};

export default View;
