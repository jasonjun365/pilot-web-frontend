import React from 'react';
import Head from './Head';
import ApplyForm from './ApplyForm';
import FormConfirmDialog from './FormConfirmDialog';
import ViewStylePropTypes from '@/libs/types/ViewStyle';

interface PropTypes extends ViewStylePropTypes {
  student_id: number
}

const View: React.FC<PropTypes> = ({student_id, getMixinStyle }) => {
  return (
    <div className={getMixinStyle('layout')}>
      <Head />
      <ApplyForm student_id={student_id} />
      <FormConfirmDialog />
    </div>
  );
};

export default View;
