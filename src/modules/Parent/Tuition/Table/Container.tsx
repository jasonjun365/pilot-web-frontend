import React, {useEffect, useMemo} from 'react';
import {useNavigate} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import Actions from '@/store/actions';

const {
  actions: menuActions,
} = Actions.basic.menu;

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
  const userState = useSelector((state: any) => state.basic.user);
  const thisState = useSelector((state: any) => state.parent.tuition);
  const getDataName = 'getData';
  const getStatusName = 'getStatus';

  const states = {
    containerId: thisState.containerId,
    searchForm: thisState.searchForm,
    data: thisState.data,
    loading: thisState.loading,
    reload: thisState.loading,
    count: thisState.count,
    selects: thisState.selects,
    thunkNames: [thisActionName + getDataName, thisActionName + getStatusName],
  };

  const getData = (params: any) => {
    dispatch(thisThunks.getTuitionList({ params }));
  };

  const methods = {
    handleGetInitialData: () => {
      getData({...thisState.initialSearchForm, ...{parentId: userState.data.userId}});
    },
    handleGetData: (params: any) => {
      getData({...params, ...{parentId: userState.data.userId}});
    },
    navToOrderDetailPage: (oid: string) => {
      navigate('/order?oid=' + oid, { replace: true });
      dispatch(menuActions.removeTab('/tuition'));
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