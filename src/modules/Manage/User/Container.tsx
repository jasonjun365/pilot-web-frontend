
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

interface PropTypes { // states
  View: React.FC<any>
}

interface PropTypes { // methods
}

const ContainerWrap: React.FC<PropTypes> = ({ View }) => {


  return (
    <View />
  );
};

export default ContainerWrap;