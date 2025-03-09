import React from 'react';
import Version from '@/components/Business/Version';
import Header from './Header';
import Menu from './Menu';
import Main from './Main';
import ViewStylePropTypes from '@/libs/types/ViewStyle';

interface PropTypes extends ViewStylePropTypes {

}

const View: React.FC<PropTypes> = ({ getMixinStyle }) => {
  return (
    <>
      <Version />
      <Header />
      <div className={getMixinStyle('layout')}>
        <Menu />
        <Main />
      </div>
    </>
  );
};

export default View;
