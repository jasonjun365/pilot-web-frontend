import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import space from './space';
import transData from './transData';

const {
  actions,
  thunks
} = space;

interface PropTypes {
  initialSearchForm: any
  searchForm: any
  data: any
  loading: boolean
}

const initialSearchForm = {
  phrase: '',
  incl: 'userinfo',
  max: 10,
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
    .addCase(actions.initialData, (state) => {
      state.data = initialState.data;
    })
    .addCase(thunks.getData.pending, (state, action: PayloadAction<any, any, any>) => {
      const params = action.meta.arg.params;
      Object.keys(params).forEach((t: any) => {
        state.searchForm[t] = params[t];
      });
      state.loading = true;
    })
    .addCase(thunks.getData.fulfilled, (state, action: PayloadAction<any>) => {
      state.data = transData(action.payload.result, state.data);
      state.loading = false;
    })
    .addCase(thunks.getData.rejected, (state) => {
      state.loading = false;
    });
  }
);

export default data;
