import React from 'react';
import Style from './Style';
import View from './View';
import Container from './Container';
import TableContainer from '@/modules/Parent/Children/Table/Container';

const StyleWrap: React.FC<any> = (props) => {
  return (
    <Style {...props} View={View} />
  );
};

const ContainerWrap: React.FC<any> = (props) => {
  return (
    <Container {...props} View={StyleWrap} />
  );
};

const ContainerWrap2: React.FC<any> = () => {
  return (
    <TableContainer View={ContainerWrap} />
  );
};

export default ContainerWrap2;
