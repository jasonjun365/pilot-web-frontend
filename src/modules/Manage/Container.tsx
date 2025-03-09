
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Container from '@/modules/Manage/Table/Container';

interface PropTypes { // states
  Index: React.FC<any>
}

interface PropTypes { // methods
  handleGetInitialData: () => void
}

const Special: React.FC<PropTypes> = ({ Index, handleGetInitialData }) => {
  const thisState = useSelector((state: any) => state.manage.table);

  useEffect(() => {
    if (!thisState.loading) {
      handleGetInitialData();
    }
  }, []);

  return (
    <Index />
  );
};

const ContainerWrap: React.FC<any> = (props) => {
  return (
    <Container props={props} Index={Special} />
  );
};

export default ContainerWrap;