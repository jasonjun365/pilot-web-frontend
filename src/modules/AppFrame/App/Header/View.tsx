import React from 'react';
import Logo from './Logo';
import Mine from './Mine';
import ViewStylePropTypes from '@/libs/types/ViewStyle';

const DEV_ENV = process.env.NODE_ENV === 'development';
const ENV = process.env.CUSTOM_ENV;

interface PropTypes extends ViewStylePropTypes {

}

const View: React.FC<PropTypes> = ({ getMixinStyle }) => {
  return (
    <div className={getMixinStyle('layout')}>
      <div className={getMixinStyle('logo')}>
        <Logo />
      </div>
      {DEV_ENV && (
        <div>
          {ENV}
          <span> design</span>
        </div>
      )}
      <Mine />
    </div>
  );
};

export default View;
