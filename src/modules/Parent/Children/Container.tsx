
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import Container from '@/modules/Parent/Children/Table/Container';

interface PropTypes { // states
  View: React.FC<any>
}

interface PropTypes { // methods
  // handleGetInitialData: () => void
}

const ContainerWrap: React.FC<PropTypes> = ({ View }) => {
  const thisState = useSelector((state: any) => state.manage.table);

  useEffect(() => {
    // console.log('Children - ContainerWrap - execute');
    // if (!thisState.loading) {
    //   // handleGetInitialData();
    // }
  }, []);

  return (
    <View />
  );
};

export default ContainerWrap;