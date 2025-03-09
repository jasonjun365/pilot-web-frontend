import React from 'react';
import Main from './Main';
import ViewStylePropTypes from '@/libs/types/ViewStyle';

interface PropTypes extends ViewStylePropTypes {

}

const View: React.FC<PropTypes> = ({ getMixinStyle }) => {
  return (
    <div className={getMixinStyle('layout')}>
      <Main/>
    </div>
  );
};

export default View;
