import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import space from './space';

const {
  actions
} = space;

interface PropTypes {
  data: any
}

const initialState: PropTypes = {
  data: {},
};

const data = createReducer(
  initialState,
  builder => { builder
    .addCase(actions.setData, (state, action: PayloadAction<any>) => {
      const params = action.payload;
      Object.keys(params).forEach((it: any) => {
        state.data[it] = params[it];
      });
    });
  }
);

export default data;
