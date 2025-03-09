import React from 'react';
import Style from './Style';
import View from './View';

const StyleWrap: React.FC<any> = (props) => {
  return (
    <Style {...props} View={View} />
  );
};

export default StyleWrap;
