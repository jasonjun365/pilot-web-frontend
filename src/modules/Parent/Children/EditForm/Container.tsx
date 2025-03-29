import React from 'react';
import { useTranslation } from 'react-i18next';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import Actions from '@/store/actions';
import {IStudent} from '@/libs/types/entities';

const {
  actions: editFormActions,
  thunks: editFormThunks,
} = Actions.parent.children.editForm;

const {
  actions: tableActions,
} = Actions.parent.children.table;

interface PropTypes { // states
  View: React.FC<any>
}

interface PropTypes { // methods

}

const Special: React.FC<PropTypes> = ({ View }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const editFormState = useSelector((state: any) => state.parent.children.editForm);
  
  const states = {
    data: editFormState.editForm.data,
    title: editFormState.editForm.title,
    open: editFormState.editForm.open,
    loading: editFormState.editForm.loading,
  };

  const methods = {
    handleClose: () => {
      dispatch(editFormActions.setEditFormTitle({title: '', type: ''}));
      dispatch(editFormActions.setEditFormOpen(false));
    },
    handleSubmit: (data: IStudent) => {
      dispatch(editFormActions.setEditFormData(data));
      const copy_data = JSON.parse(JSON.stringify(data));

      if (editFormState.editForm?.type === 'NEW') {
        dispatch(editFormThunks.addStudent({data: {...states.data, ...data}})).then(unwrapResult).then((response: any) => {
          dispatch(tableActions.setTableReload(true));
          methods.handleClose();
        });
      } else if (editFormState.editForm?.type === 'EDIT') {
        dispatch(editFormThunks.editStudent({data: {...states.data, ...data}})).then(unwrapResult).then((response: any) => {
          dispatch(tableActions.updateDataToList({...copy_data, ...{id: states.data.id}}));
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