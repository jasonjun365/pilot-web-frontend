import React from 'react';
import { useTranslation } from 'react-i18next';
import SvgIcon from '@/resource/file/svg/menu';
import ViewStylePropTypes from '@/libs/types/ViewStyle';

interface MenuProp {
  icon?: string
  name: string
  path: string | null
  parent: string | null
}

interface PropTypes extends ViewStylePropTypes { // states
  data: MenuProp
  active: boolean
  inLive: any
}

interface PropTypes { // methods
  handleClick: (v: any) => void
}

const View: React.FC<PropTypes> = ({ data, active, inLive, handleClick, getMixinStyle }) => {
  const { t } = useTranslation();

  return (
    <div
      className={getMixinStyle('layout', [active ? 'active' : ''])}
      onClick={() => handleClick(data.path)}
    >
      <span className={`${getMixinStyle('icon')} ${inLive[data.name] ? getMixinStyle('iconInLive') : '' }`}>
        {data.icon ? <SvgIcon type={data.icon} /> : ''}
      </span>
      <span className={getMixinStyle('name')}>{t('menu.' + data.name)}</span>
    </div>
  );
};

export default View;
