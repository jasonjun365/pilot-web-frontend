import React from 'react';
import Style from './Style';
import View from './View';
import Container from './Container';
import Container2 from '@/modules/Manage/Table/Container';

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

const ContainerWrap2: React.FC<any> = () => {
  return (
    <Container2 Index={ContainerWrap} />
  );
};

export default ContainerWrap2;
