import React from 'react';
import { useTranslation } from 'react-i18next';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import Actions from '@/store/actions';

const {
  actions: thisActions,
  thunks: thisThunks,
  name: thisActionName
} = Actions.manage.user.deleteForm;

const {
  actions: tableActions,
} = Actions.manage.user.table;

interface PropTypes { // states
  View: React.FC<any>
}

interface PropTypes { // methods
  handleGetData: (v: any) => void
}

const Special: React.FC<PropTypes> = ({ View, handleGetData }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const thisState = useSelector((state: any) => state.manage.user.deleteForm);
  const tableState = useSelector((state: any) => state.manage.user.table);
  const submitName = 'submit';
  
  const states = {
    data: thisState.data,
    title: thisState.title,
    open: thisState.open,
    loading: thisState.loading,
    thunkName: thisActionName + submitName,
  };

  const methods = {
    handleSubmit: (params: any) => {
      // dispatch(thisThunks[submitName]({ params }))
      //   .then(unwrapResult)
      //   .then((response: any) => {
      //     dispatch(tableActions.setSelectValue({ mode: 'remove', value: response.result.failed }));
      //     if (response.result.failed.length) {
      //       const title = t('message.failed');
      //       const msg = response.result.failed.join(',');
      //       dispatch({ type: 'basic/toast/addData', payload: { title, msg, type: 'error' }});
      //     }
      //     dispatch(thisActions.hide());
      //     const count = tableState.count - (params.postIds.length - response.result.failed.length);
      //     let page = Math.ceil(count / tableState.searchForm.size);
      //     page = tableState.searchForm.page > page ? page : tableState.searchForm.page;
      //     handleGetData({ ...tableState.searchForm, page });
      //   });
    },
    handleClose: () => {
      dispatch(thisActions.hide());
    }
  };
  
  return (
    <View
      {...states}
      {...methods}
    />
  );
};

export default Special;