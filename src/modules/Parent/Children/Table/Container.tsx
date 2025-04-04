import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import Actions from '@/store/actions';
import {IStudent} from '@/libs/types/entities';

const {
  actions: menuActions,
} = Actions.basic.menu;

const {
  actions: thisActions,
  thunks: thisThunks,
  name: thisActionName
} = Actions.parent.children.table;

const {
  actions: deleteFormActions
} = Actions.parent.children.deleteForm;

const {
  actions: editFormActions,
  thunks: editFormThunks,
} = Actions.parent.children.editForm;

interface PropTypes {
  View: React.FC<any>
  props?: any
}

const Special: React.FC<PropTypes> = ({ View, props }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const thisState = useSelector((state: any) => state.parent.children.table);
  const getDataName = 'getData';
  const getStatusName = 'getStatus';
  
  const states = {
    containerId: thisState.containerId,
    searchForm: thisState.searchForm,
    data: thisState.data,
    loading: thisState.loading,
    count: thisState.count,
    selects: thisState.selects,
    reload: thisState.reload,
    thunkNames: [thisActionName + getDataName, thisActionName + getStatusName],
  };

  const getData = (params: any) => {
    dispatch(thisThunks.getData({params}));
    dispatch(thisActions.setTableReload(false));
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
    handleEditChildClick: (data: IStudent | {}) => {
      dispatch(editFormActions.setEditFormTitle({title: 'Edit Child', type: 'EDIT'}));
      dispatch(editFormActions.setEditFormData(data));
      dispatch(editFormActions.setEditFormOpen(true));
    },
    handleReRegistrationClick: (studentId: number) => {
      navigate('/re-registration?sid=' + studentId, { replace: true });
      dispatch(menuActions.removeTab('/children'));
      dispatch(menuActions.removeTab('/tuition'));
    },
    handleDeleteFormShow: () => {
      const params = {
        postIds: thisState.selects.data['remove'],
      };

      dispatch(deleteFormActions.reset());
      dispatch(deleteFormActions.setData(params));
      dispatch(deleteFormActions.show(t('btn.delete')));
    },
  };

  useEffect(() => {
    if (states.reload) {
      methods.handleGetData(states.searchForm);
    }
  }, [states.reload]);

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