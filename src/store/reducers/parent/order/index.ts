import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import space from './space';
import {IOrder} from '@/libs/types/entities';
import _ from 'lodash';

const {
  actions,
  thunks
} = space;

interface PropTypes {
  orderList: Array<IOrder>
  orderDetail: IOrder | null
  loading: boolean
}

const initialState: PropTypes = {
  orderList: [],
  orderDetail: null,
  loading: false,
};
const data = createReducer(
  initialState,
  builder => { builder
    .addCase(actions.setLoading, (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    })
    .addCase(actions.setOrderDetail, (state, action: PayloadAction<IOrder>) => {
      state.orderDetail = action.payload;
    })
    .addCase(actions.setOrderList, (state, action: PayloadAction<Array<IOrder>>) => {
      state.orderList = action.payload;
    });
  }
);

export default data;
