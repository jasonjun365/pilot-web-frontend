
import React from 'react';
import { useSelector } from 'react-redux';
import Container from '@/modules/Parent/Children/Table/Container';
import Actions from '@/store/actions';

const {
  name: thisActionName
} = Actions.parent.children.table;

interface PropTypes { // states
  Index: React.FC<any>
}

interface PropTypes { // methods
  handleGetData: (v: any) => void
}

const Special: React.FC<PropTypes> = ({ Index, handleGetData }) => {
  const thisState = useSelector((state: any) => state.manage.table);
  const getDataName = 'getData';
  const getStatusName = 'getStatus';
  
  const states = {
    initialData: thisState.initialSearchForm,
    data: thisState.searchForm,
    loading: thisState.loading,
    thunkNames: [thisActionName + getDataName, thisActionName + getStatusName],
  };

  const methods = {
    handleGetData: (params: any) => {
      handleGetData(params);
    }
  };
  
  return (
    <Index
      {...states}
      {...methods}
    />
  );
};

const ContainerWrap: React.FC<any> = (props) => {
  return (
    <Container props={props} View={Special} />
  );
};

export default ContainerWrap;