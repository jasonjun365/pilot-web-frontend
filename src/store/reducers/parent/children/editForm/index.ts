import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import space from './space';
import {IStudent} from '@/libs/types/entities';
import {getUserInfo} from '@/libs/utils/localstorage';

const userInfo = getUserInfo();

const {actions, thunks} = space;

interface PropTypes {
  editForm: {
    open: boolean
    title: string
    type: '' | 'NEW' | 'EDIT'
    loading: boolean
    data: IStudent | null
  }
}

const initialState: PropTypes = {
  editForm: {
    open: false,
    title: '',
    type: '',
    loading: false,
    data: {
      id: 0,
      name: '',
      email: '',
      address: '',
      parentName: '',
      parentEmail: '',
      primaryParentId: userInfo.userId,
      enabled: 1
    }
  }
};

const data = createReducer(
  initialState,
  builder => { builder
    .addCase(actions.reset, (state) => {
      state.editForm = initialState.editForm;
    })
    .addCase(actions.setEditFormOpen, (state, action: PayloadAction<boolean>) => {
      state.editForm.open = action.payload;
      if (!action.payload) {
        state.editForm.data = {
          id: 0,
          name: '',
          email: '',
          address: '',
          parentName: '',
          parentEmail: '',
          primaryParentId: userInfo.userId,
          enabled: 1
        };
      }
    })
    .addCase(actions.setEditFormTitle, (state, action: PayloadAction<{title: string, type: '' | 'NEW' | 'EDIT'}>) => {
      state.editForm.title = action.payload.title;
      state.editForm.type = action.payload.type;
    })
    .addCase(actions.setEditFormData, (state, action: PayloadAction<IStudent>) => {
      state.editForm.data = {...state.editForm.data, ...action.payload};
      state.editForm.data.primaryParentId = userInfo.userId;
      console.log('setEditFormData: ', state.editForm.data);
    })
    .addCase(thunks.addStudent.pending, (state) => {
      state.editForm.loading = true;
    })
    .addCase(thunks.addStudent.fulfilled, (state, action: PayloadAction<any, any, any>) => {
      state.editForm.loading = false;
    })
    .addCase(thunks.addStudent.rejected, (state) => {
      state.editForm.loading = false;
    })
    .addCase(thunks.editStudent.pending, (state) => {
      state.editForm.loading = true;
    })
    .addCase(thunks.editStudent.fulfilled, (state, action: PayloadAction<any, any, any>) => {
      state.editForm.loading = false;
    })
    .addCase(thunks.editStudent.rejected, (state) => {
      state.editForm.loading = false;
    });
  }
);

export default data;
