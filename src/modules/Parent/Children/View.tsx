import React from 'react';
import Head from './Head';
import SearchForm from './SearchForm';
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
      <SearchForm />
      <Table />
      <EditForm />
      <DeleteForm />
    </div>
  );
};

export default View;
