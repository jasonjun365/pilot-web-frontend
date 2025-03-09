import React from 'react';
import Item from './Item';
import ViewStylePropTypes from '@/libs/types/ViewStyle';

interface PropTypes extends ViewStylePropTypes { // states
  data: any[]
  current: string
  inLive: any,
}

interface PropTypes { // methods
  handleClick: (v: any) => void
}

const View: React.FC<PropTypes> = ({ data, current, inLive, handleClick, getMixinStyle }) => {
  return (
    <div className={getMixinStyle('layout')}>
      {data.filter((it: any) => it.show).map((it, i) => (
        <Item key={i} data={it} active={current === it.path} inLive={inLive} handleClick={handleClick} />
      ))}
    </div>
  );
};

export default View;
