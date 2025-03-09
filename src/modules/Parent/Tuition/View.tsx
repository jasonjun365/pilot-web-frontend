import React from 'react';
import Head from './Head';
import Table from './Table';
import ViewStylePropTypes from '@/libs/types/ViewStyle';

interface PropTypes extends ViewStylePropTypes {

}

const View: React.FC<PropTypes> = ({ getMixinStyle }) => {
  return (
    <div className={getMixinStyle('layout')}>
      <Head />
      <Table />
    </div>
  );
};

export default View;
