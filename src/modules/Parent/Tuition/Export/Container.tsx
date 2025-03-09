import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Actions from '@/store/actions';

const {
  actions: thisActions,
} = Actions.parent.tuition;

interface PropTypes {
  View: React.FC<any>
}

const Container: React.FC<PropTypes> = ({View}) => {
  const dispatch = useDispatch();

  const states = {};

  const methods = {
    handleExportPDF: () => {
      // TODO export data to PDF
    },
    handleExportExcel: () => {
      // TODO export data to excel
    }
  };

  return (
    <View
      {...states}
      {...methods}
    />
  );
};

export default Container;