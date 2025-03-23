import React from 'react';
import Style from './Style';
import View from './View';

const Special: React.FC<any> = (props) => {
  return (
    <Style {...props} View={View} />
  );
};

export default Special;
