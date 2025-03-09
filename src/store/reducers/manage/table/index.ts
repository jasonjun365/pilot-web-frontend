import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';
import space from './space';
import transData from './transData';
import transData2 from './transData2';

const {
  actions,
  thunks
} = space;

interface PropTypes {
  initialSearchForm: any
  searchForm: any
  data: any
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
    .addCase(thunks.getData.pending, (state, action: PayloadAction<any, any, any>) => {
      const params = action.meta.arg.params;
      Object.keys(params).forEach((t: any) => {
        state.searchForm[t] = params[t];
      });
      state.loading = true;
      state.selects.data[initialState.selects.now] = initialState.selects.data[initialState.selects.now];
    })
    .addCase(thunks.getData.fulfilled, (state, action: PayloadAction<any, any, any>) => {
      state.data = transData(action.payload.result.data.list, state.data);
      state.loading = false;
      state.count = action.payload.result.aux.total;
    })
    .addCase(thunks.getData.rejected, (state) => {
      state.loading = false;
    })
    .addCase(thunks.getStatus.pending, (state) => {
      state.loading = true;
    })
    .addCase(thunks.getStatus.fulfilled, (state, action: PayloadAction<any, any, any>) => {
      state.data = transData2(action.payload.result.data.cats, state.data);
      state.loading = false;
    })
    .addCase(thunks.getStatus.rejected, (state) => {
      state.loading = false;
    });
  }
);

export default data;
