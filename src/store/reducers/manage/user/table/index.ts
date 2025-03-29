import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';
import space from './space';
import {IUser} from '@/libs/types/entities';

const {
  actions,
  thunks
} = space;

interface PropTypes {
  initialSearchForm: any
  searchForm: any
  data: IUser[]
  loading: boolean
  count: number
  selects: {
    now: string
    data: {
      [t: string]: string[]
    }
  }
}

const initialSearchForm = {
  phrase: '',
  sort: 'recent',
  page: 1,
  size: 10,
};

const initialState: PropTypes = {
  initialSearchForm,
  searchForm: initialSearchForm,
  data: [],
  loading: false,
  count: 0,
  selects: {
    now: 'remove',
    data: {
      remove: []
    }
  }
};
const data = createReducer(
  initialState,
  builder => { builder
    .addCase(actions.setSelectValue, (state, action: PayloadAction<any, any>) => {
      state.selects.data[action.payload.mode] = action.payload.value;
    })
    .addCase(actions.appendDataToList, (state, action: PayloadAction<IUser>) => {
      state.data = [...state.data, ...[action.payload]];
    })
    .addCase(actions.updateDataToList, (state, action: PayloadAction<IUser>) => {
      const newList = [...state.data];
      const targetItem = newList.find(
        item => item.userId === action.payload.userId
      );
      if (targetItem) {
        // TODO do later
        targetItem.userId = action.payload.userId;
        targetItem.username = action.payload.username;
        targetItem.email = action.payload.email;
        targetItem.roleIdList = action.payload.roleIdList;
        targetItem.status = action.payload.status;
        state.data = newList;
      }
    })
    .addCase(thunks.getData.pending, (state, action: PayloadAction<any, any, any>) => {
      const params = action.meta.arg.params;
      Object.keys(params).forEach((t: any) => {
        state.searchForm[t] = params[t];
      });
      state.loading = true;
      state.selects.data[initialState.selects.now] = initialState.selects.data[initialState.selects.now];
    })
    .addCase(thunks.getData.fulfilled, (state, action: PayloadAction<any, any, any>) => {
      state.count = action.payload.data.total;
      state.data = action.payload.data.records;
      state.loading = false;
    })
    .addCase(thunks.getData.rejected, (state) => {
      state.loading = false;
    });
  }
);

export default data;
