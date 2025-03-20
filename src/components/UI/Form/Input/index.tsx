import React from 'react';
import Style from '@/components/UI/Form/Input/Style';
import View from './View';

const Input: React.FC<any> = (props) => {
  return (
    <Style {...props} View={View} />
  );
};

export default Input;
