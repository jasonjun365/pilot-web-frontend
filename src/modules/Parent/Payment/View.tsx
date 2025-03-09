import React from 'react';
import Head from './Head';
import ViewStylePropTypes from '@/libs/types/ViewStyle';

interface PropTypes extends ViewStylePropTypes {
  handleSubmit?: () => void
  handleCancel?: () => void
}

const View: React.FC<PropTypes> = ({getMixinStyle, ...props }) => {
  return (
    <div className={getMixinStyle('layout')}>
      <Head {...props} />
      <div className={getMixinStyle('detail')}>Display a payment form. User has to fill bank card info, and than click pay button.</div>
    </div>
  );
};

export default View;
