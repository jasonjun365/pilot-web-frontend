import React from 'react';
import Head from './Head';
import Table from './Table';
import DeleteForm from './DeleteForm';
import EditForm from './EditForm';
import ViewStylePropTypes from '@/libs/types/ViewStyle';

interface PropTypes extends ViewStylePropTypes {

}

const View: React.FC<PropTypes> = ({ getMixinStyle }) => {
  return (
    <div className={getMixinStyle('layout')}>
      <Head />
      <Table />
      <EditForm />
      <DeleteForm />
    </div>
  );
};

export default View;
