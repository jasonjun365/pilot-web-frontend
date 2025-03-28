import React from 'react';
import Head from './Head';
import ViewStylePropTypes from '@/libs/types/ViewStyle';
import PdfPreview from '@/components/UI/PdfPreview';

interface PropTypes extends ViewStylePropTypes {
  pdfUrl: string,
  handleSubmit?: () => void
  handleCancel?: () => void
}

const View: React.FC<PropTypes> = ({
  pdfUrl,
  getMixinStyle,
  ...props
}) => {
  return (
    <div className={getMixinStyle('layout')}>
      <Head {...props} />
      <div className={getMixinStyle('detail')}>
        <PdfPreview prfUrl={pdfUrl} />
      </div>
    </div>
  );
};

export default View;
