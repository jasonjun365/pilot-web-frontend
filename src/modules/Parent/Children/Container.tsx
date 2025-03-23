
import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';

interface PropTypes { // states
  View: React.FC<any>
}

interface PropTypes { // methods

}

const ContainerWrap: React.FC<PropTypes> = ({ View }) => {

  useEffect(() => {
  }, []);

  return (
    <View />
  );
};

export default ContainerWrap;