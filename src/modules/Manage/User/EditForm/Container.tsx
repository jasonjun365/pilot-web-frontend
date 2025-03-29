import React from 'react';
import { useTranslation } from 'react-i18next';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import Actions from '@/store/actions';
import {IUser} from '@/libs/types/entities';

const {
  actions: editFormActions,
  thunks: editFormThunks,
} = Actions.manage.user.editForm;

const {
  actions: tableActions,
} = Actions.manage.user.table;

interface PropTypes { // states
  View: React.FC<any>
}

interface PropTypes { // methods

}

const Special: React.FC<PropTypes> = ({ View }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const editFormState = useSelector((state: any) => state.manage.user.editForm);
  
  const states = {
    data: editFormState.editForm.data,
    formType: editFormState.editForm?.type || '',
    title: editFormState.editForm.title,
    open: editFormState.editForm.open,
    loading: editFormState.editForm.loading,
  };

  const methods = {
    handleClose: () => {
      dispatch(editFormActions.setEditFormTitle({title: '', type: ''}));
      dispatch(editFormActions.setEditFormOpen(false));
    },
    handleSubmit: (data: IUser) => {
      dispatch(editFormActions.setEditFormData(data));
      const copy_data = JSON.parse(JSON.stringify(data));

      if (editFormState.editForm?.type === 'NEW') {
        dispatch(editFormThunks.addUser({data: data})).then(unwrapResult).then((response: any) => {
          if (response?.data) {
            dispatch(tableActions.appendDataToList(response.data));
          }
          methods.handleClose();
        });
      } else if (editFormState.editForm?.type === 'EDIT') {
        dispatch(editFormThunks.editUser({data: {...states.data, ...data}})).then(unwrapResult).then((response: any) => {
          dispatch(tableActions.updateDataToList({...states.data, ...data}));
          methods.handleClose();
        });
      } else {
        // nothing to do
      }
    },
    handleDelete: () => {}
  };
  
  return (
    <View
      {...states}
      {...methods}
    />
  );
};

export default Special;