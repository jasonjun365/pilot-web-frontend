import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import space from './space';
import {ITuition} from '@/libs/types/entities';
import _ from 'lodash';

const {
  actions,
  thunks
} = space;

interface PropTypes {
  initialSearchForm: any
  searchForm: any
  data: Array<ITuition>
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
  keyword: '',
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
    .addCase(actions.setLoading, (state, action: PayloadAction<any>) => {
      state.loading = action.payload;
    })
    .addCase(actions.setSelectValue, (state, action: PayloadAction<any, any>) => {
      state.selects.data[action.payload.mode] = action.payload.value;
    })
    .addCase(thunks.getTuitionList.pending, (state, action: PayloadAction<any, any, any>) => {
      const params = action.meta.arg.params;
      Object.keys(params).forEach((t: any) => {
        state.searchForm[t] = params[t];
      });
      state.loading = true;
      state.selects.data[initialState.selects.now] = initialState.selects.data[initialState.selects.now];
    })
    .addCase(thunks.getTuitionList.fulfilled, (state, action: PayloadAction<any, any, any>) => {
      console.log('Tuition List: ', action.payload.data);
      state.count = action.payload.data.total;
      state.data = action.payload.data.records;
      state.loading = false;
    })
    .addCase(thunks.getTuitionList.rejected, (state) => {
      state.loading = false;
    });
  }
);

export default data;
