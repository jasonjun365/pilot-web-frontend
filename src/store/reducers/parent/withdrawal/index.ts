import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import space from './space';
import _ from 'lodash';

const {
  actions,
  thunks
} = space;

interface PropTypes {
  loading: boolean
  pdfUrl: string
}

const initialState: PropTypes = {
  loading: false,
  pdfUrl: '/withdrawal.pdf',
};
const data = createReducer(
  initialState,
  builder => { builder
    .addCase(actions.setLoading, (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    });
  }
);

export default data;
