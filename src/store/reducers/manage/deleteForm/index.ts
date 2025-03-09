import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import space from './space';

const {
  actions,
  thunks
} = space;

interface PropTypes {
  data: any
  title: string
  open: boolean
  loading: boolean
  backendDeleteMax: number
}

const initialState: PropTypes = {
  data: {
    postIds: []
  },
  title: '',
  open: false,
  loading: false,
  backendDeleteMax: 200,
};

const data = createReducer(
  initialState,
  builder => { builder
    .addCase(actions.reset, (state) => {
      state.data = initialState.data;
    })
    .addCase(actions.setData, (state, action: PayloadAction<any>) => {
      const params = action.payload;
      Object.keys(params).forEach((t: any) => {
        state.data[t] = params[t];
      });
    })
    .addCase(actions.show, (state, action: PayloadAction<any>) => {
      state.title = action.payload;
      state.open = true;
    })
    .addCase(actions.hide, (state) => {
      state.open = false;
    })
    .addCase(thunks.submit.pending, (state) => {
      state.loading = true;
    })
    .addCase(thunks.submit.fulfilled, (state) => {
      state.loading = false;
    })
    .addCase(thunks.submit.rejected, (state) => {
      state.loading = false;
    });
  }
);

export default data;
