
import React from 'react';
import { useTranslation } from 'react-i18next';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import Actions from '@/store/actions';

const {
  actions: thisActions,
  thunks: thisThunks,
  name: thisActionName
} = Actions.manage.table;

const {
  actions: deleteFormActions
} = Actions.manage.deleteForm;

interface PropTypes {
  Index: React.FC<any>
  props?: any
}

const Special: React.FC<PropTypes> = ({ Index, props }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const thisState = useSelector((state: any) => state.manage.table);
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
    dispatch(thisThunks[getDataName]({ params }))
      .then(unwrapResult)
      .then((response: any) => {
        const params = {
          content: {
            streamIds: response.result.data.list.filter((it: any) => it.sid).map((it: any) => it.sid)
          }
        };

        dispatch(thisThunks[getStatusName]({ params }));
      });
  };

  const methods = {
    handleGetInitialData: () => {
      getData(thisState.initialSearchForm);
    },
    handleGetData: (params: any) => {
      getData(params);
    },
    handleChangeSortGetData: () => {
      const params = {
        ...thisState.searchForm,
        sort: thisState.searchForm.sort === 'old' ? 'recent' : 'old',
      };

      methods.handleGetData(params);
    },
    handleSetSelectValue: (params: any) => {
      dispatch(thisActions.setSelectValue(params));
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
  
  return (
    <Index
      {...props}
      {...states}
      {...methods}
    />
  );
};

export default Special;