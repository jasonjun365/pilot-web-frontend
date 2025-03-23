import React from 'react';
import Style from './Style';
import View from './View';
import Container from './Container';

const StyleWrap: React.FC<any> = (props) => {
  return (
    <Style {...props} View={View} />
  );
};


const ContainerWrap: React.FC<any> = () => {
  return (
    <Container View={StyleWrap} />
  );
};

export default ContainerWrap;
