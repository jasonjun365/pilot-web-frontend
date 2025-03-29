
import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Actions from '@/store/actions';
import html2PDF from 'jspdf-html2canvas';

const {
  actions: menuActions,
} = Actions.basic.menu;

const {
  actions: thisActions,
  thunks: thisThunks,
} = Actions.parent.order;

interface PropTypes { // states
  View: React.FC<any>
}

interface PropTypes { // methods

}

const ContainerWrap: React.FC<PropTypes> = ({ View }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const _oid: any = searchParams.get('oid') || 0;
  const refDetail = useRef(null);

  const userState = useSelector((state: any) => ({
    data: state.basic.user.data
  }));
  const thisState = useSelector((state: any) => ({
    currentTuition: state.parent.order.currentTuition,
    orderDetail: state.parent.order.orderDetail,
  }));

  const states = {
    refDetail: refDetail,
    orderDetail: thisState.orderDetail,
  };

  const methods = {
    handleSubmit: () => {
      dispatch(thisActions.setConfirmDialog({title: 'Confirm Pay', open: true}));
    },
    handleReceipt: () => {
      // receipt display receipt pdf in new tab
      if (refDetail?.current) {
        html2PDF(refDetail.current, {
          jsPDF: {
            format: 'a4',
          },
          imageType: 'image/jpeg',
          output: 'Receipt.pdf'
        });
      }
    },
    handleCancel: () => {
      navigate('/tuition', { replace: true });
      dispatch(menuActions.removeTab('/order'));
    },
  };

  useEffect(() => {
    if (_oid) {
      // get oid detail from back-end
      dispatch(thisThunks.getOrder({urlParams: {oid: _oid}}));
    }
  }, []);

  return (
    <View
      {...states}
      {...methods}
    />
  );
};

export default ContainerWrap;