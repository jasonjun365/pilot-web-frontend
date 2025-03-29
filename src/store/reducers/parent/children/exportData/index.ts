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
}

const initialSearchForm = {
  keyword: '',
  parentId: userInfo.userId,
  page: 1,
  size: 100,
};

const initialState: PropTypes = {
  initialSearchForm,
  searchForm: initialSearchForm,
  data: [],
  loading: false,
};
const data = createReducer(
  initialState,
  builder => { builder
    .addCase(actions.setSearchForm, (state, action: PayloadAction<any, any>) => {
      state.searchForm = {...state.searchForm, ...action.payload};
    })
    .addCase(actions.setLoading, (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    })
    .addCase(thunks.getExportData.pending, (state, action: PayloadAction<any, any, any>) => {
      const params = action.meta.arg.params;
      Object.keys(params).forEach((t: any) => {
        state.searchForm[t] = params[t];
      });
      state.loading = true;
    })
    .addCase(thunks.getExportData.fulfilled, (state, action: PayloadAction<any, any, any>) => {
      state.data = action.payload?.data.records;
      state.loading = false;
    })
    .addCase(thunks.getExportData.rejected, (state) => {
      state.loading = false;
    });
  }
);

export default data;
