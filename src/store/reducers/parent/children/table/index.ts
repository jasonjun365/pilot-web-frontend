import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';
import space from './space';
import {IStudent} from '@/libs/types/entities';
import {getUserInfo} from '@/libs/utils/localstorage';

const userInfo = getUserInfo();

const {
  actions,
  thunks
} = space;

interface PropTypes {
  initialSearchForm: any
  searchForm: any
  data: IStudent[]
  loading: boolean
  count: number
  selects: {
    now: string
    data: {
      [t: string]: string[]
    }
  },
  reload: boolean
}

const initialSearchForm = {
  keyword: '',
  parentId: userInfo.userId,
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
  },
  reload: false,
};
const data = createReducer(
  initialState,
  builder => { builder
    .addCase(actions.setSearchForm, (state, action: PayloadAction<any, any>) => {
      state.searchForm = {...state.searchForm, ...action.payload};
    })
    .addCase(actions.setTableReload, (state, action: PayloadAction<boolean>) => {
      state.reload = action.payload;
    })
    .addCase(actions.setSelectValue, (state, action: PayloadAction<any, any>) => {
      state.selects.data[action.payload.mode] = action.payload.value;
    })
    .addCase(actions.appendDataToList, (state, action: PayloadAction<IStudent>) => {
      state.data = [...state.data, ...[action.payload]];
    })
    .addCase(actions.updateDataToList, (state, action: PayloadAction<IStudent>) => {
      const newList = [...state.data];
      const targetItem = newList.find(
        item => item.id === action.payload.id
      );
      if (targetItem) {
        targetItem.name = action.payload.name;
        targetItem.email = action.payload.email;
        targetItem.address = action.payload.address;
        targetItem.parentName = action.payload.parentName;
        targetItem.parentEmail = action.payload.parentEmail;
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
      console.log('thunks.getData.fulfilled: ', action.payload.data);
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
