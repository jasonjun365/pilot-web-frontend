import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import space from './space';
import {IUser} from '@/libs/types/entities';

const {actions, thunks} = space;

interface PropTypes {
  editForm: {
    open: boolean
    title: string
    type: '' | 'NEW' | 'EDIT'
    loading: boolean
    data: IUser | null
  }
}

const initialState: PropTypes = {
  editForm: {
    open: false,
    title: '',
    type: '',
    loading: false,
    data: {
      userId: '',
      username: '',
      email: '',
      password: '',
      roleIdList: [],
      status: 1,
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
          userId: '',
          username: '',
          email: '',
          password: '',
          roleIdList: [],
          status: 1,
        };
      }
    })
    .addCase(actions.setEditFormTitle, (state, action: PayloadAction<{title: string, type: '' | 'NEW' | 'EDIT'}>) => {
      state.editForm.title = action.payload.title;
      state.editForm.type = action.payload.type;
    })
    .addCase(actions.setEditFormData, (state, action: PayloadAction<IUser>) => {
      state.editForm.data = {...state.editForm.data, ...action.payload};
      console.log('setEditFormData: ', state.editForm.data);
    })
    .addCase(thunks.addUser.pending, (state) => {
      state.editForm.loading = true;
    })
    .addCase(thunks.addUser.fulfilled, (state, action: PayloadAction<any, any, any>) => {
      state.editForm.loading = false;
    })
    .addCase(thunks.addUser.rejected, (state) => {
      state.editForm.loading = false;
    })
    .addCase(thunks.editUser.pending, (state) => {
      state.editForm.loading = true;
    })
    .addCase(thunks.editUser.fulfilled, (state, action: PayloadAction<any, any, any>) => {
      state.editForm.loading = false;
    })
    .addCase(thunks.editUser.rejected, (state) => {
      state.editForm.loading = false;
    });
  }
);

export default data;
