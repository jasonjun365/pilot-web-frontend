import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import space from './space';
import {IOrder, IStudent, ITuition} from '@/libs/types/entities';
import _ from 'lodash';

const {
  actions,
  thunks
} = space;

interface PropTypes {
  currentTuition: ITuition | undefined,
  orderList: Array<IOrder>
  orderDetail: IOrder | undefined
  loading: boolean,
  formConfirm: {
    title: string
    open: boolean
  }
}

const initialState: PropTypes = {
  currentTuition: undefined,
  orderList: [],
  orderDetail: undefined,
  loading: false,
  formConfirm: {
    title: '',
    open: false,
  },
};
const data = createReducer(
  initialState,
  builder => { builder
    .addCase(actions.setLoading, (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    })
    .addCase(actions.setConfirmDialog, (state, action: PayloadAction<{title: string, open: boolean}>) => {
      state.formConfirm = action.payload;
    })
    .addCase(actions.setCurrentTuition, (state, action: PayloadAction<ITuition | undefined>) => {
      state.currentTuition = action.payload;
    })
    .addCase(actions.setOrderDetail, (state, action: PayloadAction<IOrder>) => {
      state.orderDetail = action.payload;
    })
    .addCase(actions.setOrderList, (state, action: PayloadAction<Array<IOrder>>) => {
      state.orderList = action.payload;
    })
    .addCase(thunks.getOrder.pending, (state, action: PayloadAction<any, any, any>) => {
      state.loading = true;
    })
    .addCase(thunks.getOrder.fulfilled, (state, action: PayloadAction<any, any, any>) => {
      state.orderDetail = action.payload.data;
      state.loading = false;
    })
    .addCase(thunks.getOrder.rejected, (state) => {
      state.loading = false;
    });
  }
);

export default data;
