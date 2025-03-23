import React from 'react';
import Style from './Style';
import View from './View';
import Container from './Container';

const StyleWrap: React.FC<any> = (props) => {
  return (
    <Style {...props} View={View} />
  );
};

const ContainerWrap: React.FC<any> = (props) => {
  return (
    <Container {...props} Index={StyleWrap} />
  );
};

export default ContainerWrap;
