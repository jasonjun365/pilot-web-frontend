import React from 'react';
import Head from './Head';
import ApplyForm from './ApplyForm';
import FormConfirmDialog from './FormConfirmDialog';
import ViewStylePropTypes from '@/libs/types/ViewStyle';

interface PropTypes extends ViewStylePropTypes {

}

const View: React.FC<PropTypes> = ({getMixinStyle }) => {
  return (
    <div className={getMixinStyle('layout')}>
      <Head />
      <ApplyForm />
      <FormConfirmDialog />
    </div>
  );
};

export default View;
