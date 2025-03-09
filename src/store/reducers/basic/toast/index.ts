import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import space from './space';

const {
  actions
} = space;

interface DataType {
  open: boolean
  title?: string
  msg: string
  type: 'error' | 'warning' | 'info' | 'success'
  time?: number
}

interface PropTypes {
  data: DataType[]
}

const initialState: PropTypes = {
  data: [],
};

const data = createReducer(
  initialState,
  builder => { builder
    .addCase(actions.addData, (state, action: PayloadAction<any>) => {
      state.data.push({
        open: true,
        title: action.payload.title,
        msg: action.payload.msg,
        type: action.payload.type || 'info',
        time: action.payload.time ?? 7000,
      });
    })
    .addCase(actions.closeData, (state, action: PayloadAction<number>) => {
      if (state.data.filter((it: any) => it.open).length > 1) {
        state.data[action.payload].open = false;
      } else {
        state.data = initialState.data;
      }
    });
  }
);

export default data;
