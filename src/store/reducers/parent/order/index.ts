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
  loading: boolean
}

const initialState: PropTypes = {
  currentTuition: undefined,
  orderList: [],
  orderDetail: undefined,
  loading: false,
};
const data = createReducer(
  initialState,
  builder => { builder
    .addCase(actions.setLoading, (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
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
      console.log('thunks.getOrder.fulfilled: ', action.payload);
      state.orderDetail = action.payload.data;
      state.loading = false;
    })
    .addCase(thunks.getOrder.rejected, (state) => {
      state.loading = false;
    });
  }
);

export default data;
