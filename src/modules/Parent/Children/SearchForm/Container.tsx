
import React from 'react';
import { useSelector } from 'react-redux';
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
  const thisState = useSelector((state: any) => state.parent.children.table);
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
      // TODO do later
      // handleGetData(params);
    }
  };
  
  return (
    <Index
      {...states}
      {...methods}
    />
  );
};

export default Special;