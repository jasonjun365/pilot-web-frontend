import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import Actions from '@/store/actions';

const {
  actions: thisActions,
  thunks: thisThunks,
  name: thisActionName
} = Actions.parent.tuition;

interface PropTypes {
  View: React.FC<any>
  props?: any
}

const Special: React.FC<PropTypes> = ({ View, props }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const thisState = useSelector((state: any) => state.parent.tuition);
  const getDataName = 'getData';
  const getStatusName = 'getStatus';

  const states = {
    searchForm: thisState.searchForm,
    data: thisState.data,
    loading: thisState.loading,
    count: thisState.count,
    selects: thisState.selects,
    thunkNames: [thisActionName + getDataName, thisActionName + getStatusName],
  };

  const getData = (params: any) => {
    dispatch(thisThunks[getDataName]({ params }));
  };

  const methods = {
    handleGetInitialData: () => {
      getData(thisState.initialSearchForm);
    },
    handleGetData: (params: any) => {
      getData(params);
    },
    handleSetSelectValue: (params: any) => {
      dispatch(thisActions.setSelectValue(params));
    },
  };

  useEffect(() => {
    if (!thisState.loading) {
      methods.handleGetInitialData();
    }
  }, []);

  return (
    <View
      {...props}
      {...states}
      {...methods}
    />
  );
};

export default Special;