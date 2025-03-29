import React from 'react';
import { Divider, Grid } from '@mui/material';
import Head from './Head';
import FormConfirmDialog from './FormConfirmDialog';
import ViewStylePropTypes from '@/libs/types/ViewStyle';
import {IActivity, IOrder} from '@/libs/types/entities';

interface PropTypes extends ViewStylePropTypes {
  refDetail: any
  orderDetail?: IOrder
  handleSubmit?: () => void
  handleReceipt?: () => void
  handleCancel?: () => void
}

const View: React.FC<PropTypes> = ({refDetail, orderDetail, getMixinStyle, ...props }) => {

  return (
    <div className={getMixinStyle('layout')}>
      <Head orderDetail={orderDetail} {...props} />
      <FormConfirmDialog />
      {orderDetail && (
        <div ref={refDetail} className={getMixinStyle('detail')}>
          <Divider textAlign="left">Student Info</Divider>
          <Grid container spacing={0} style={{marginBottom: '24px'}}>
            <Grid sm={6}>
              <div><span>Student Name: {orderDetail?.tuition?.student?.name}</span></div>
              <div><span>Parent Name: {orderDetail?.tuition?.parent?.username}</span></div>
            </Grid>
            <Grid sm={6}>
              <div><span>Email: {orderDetail?.tuition?.student?.email}</span></div>
              <div><span>Email: {orderDetail?.tuition?.parent?.email}</span></div>
            </Grid>
          </Grid>
          <Divider textAlign="left">Program Info</Divider>
          <Grid container spacing={0} style={{marginBottom: '24px'}}>
            <Grid sm={12}>
              <div><span>Program Name: {orderDetail?.tuition?.program?.name}</span></div>
              <div><span>Tuition: ${orderDetail?.tuition?.tuition}</span></div>
              <div><span>Tuition Discount: ${orderDetail?.tuition?.tuitionDiscount}</span></div>
              <div><span>Tech Fee: ${orderDetail?.tuition?.techFee}</span></div>
            </Grid>
          </Grid>
          <Divider textAlign="left">Activities Info</Divider>
          {orderDetail?.tuition?.activities && orderDetail?.tuition?.activities.map((item: IActivity) => {
            return (
              <Grid key={item.id.toString()} container spacing={0} style={{marginBottom: '24px'}}>
                <Grid sm={6}>
                  <div><span>Activity Name: {item.name}</span></div>
                </Grid>
                <Grid sm={6}>
                  <div><span>Activity Fee$: {item.fee}</span></div>
                </Grid>
              </Grid>
            );
          })}
          <Divider textAlign="left">Price Info</Divider>
          <Grid container spacing={0} style={{marginBottom: '24px', textAlign: 'right'}}>
            <Grid sm={12}>
              <div><span>Tuition Total Fee: ${orderDetail.tuitionTotalFee}</span></div>
              <div><span>GST: ${orderDetail.gstFee}</span></div>
              <div><span>Total Amount: ${orderDetail.totalAmount}</span></div>
            </Grid>
          </Grid>
        </div>
      )}
      {!orderDetail && (
        <div className={getMixinStyle('detail')}>
          Order not found.
        </div>
      )}
    </div>
  );
};

export default View;
