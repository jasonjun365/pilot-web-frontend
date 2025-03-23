import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import Actions from '@/store/actions';
import {IUser} from '@/libs/types/entities';


const {
  actions: thisActions,
  thunks: thisThunks,
  name: thisActionName
} = Actions.manage.user.table;

const {
  actions: deleteFormActions
} = Actions.manage.user.deleteForm;

const {
  actions: editFormActions,
  thunks: editFormThunks,
} = Actions.manage.user.editForm;

interface PropTypes {
  View: React.FC<any>
  props?: any
}

const Special: React.FC<PropTypes> = ({ View, props }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const thisState = useSelector((state: any) => state.manage.user.table);
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
    handleEditChildClick: (data: IUser) => {
      dispatch(editFormActions.setEditFormTitle({title: 'Edit Child', type: 'EDIT'}));
      dispatch(editFormActions.setEditFormData({
        userId: data.userId,
        username: data.username,
        email: data.email,
        password: '',
        roleIdList: data?.roleIdList || [],
        status: data.status,
      }));
      dispatch(editFormActions.setEditFormOpen(true));
    },
    handleDeleteFormShow: () => {
      // const params = {
      //   postIds: thisState.selects.data['remove'],
      // };
      //
      // dispatch(deleteFormActions.reset());
      // dispatch(deleteFormActions.setData(params));
      // dispatch(deleteFormActions.show(t('btn.delete')));
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