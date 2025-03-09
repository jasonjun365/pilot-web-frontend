import React from 'react';
import ViewStylePropTypes from '@/libs/types/ViewStyle';
import Head from './Head';

interface PropTypes extends ViewStylePropTypes {

}

const View: React.FC<PropTypes> = ({getMixinStyle, ...props}) => {

  return (
    <div className={getMixinStyle('layout')}>
      <Head />
    </div>
  );
};

export default View;
