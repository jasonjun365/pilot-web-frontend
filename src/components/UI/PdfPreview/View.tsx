import React, { PureComponent } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import ViewStylePropTypes from '@/libs/types/ViewStyle';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;



interface PropTypes extends ViewStylePropTypes { // states
  prfUrl: string,
  pageNumber: number,
  pageWidth: number
}

interface PropTypes { // methods
  onDocumentLoadSuccess: () => void
}

const View: React.FC<PropTypes> = ({
  prfUrl,
  pageNumber=1,
  pageWidth=1000,
  onDocumentLoadSuccess,
  getMixinStyle
}) => {
  return (
    <div className="pdf-view">
      <Document
        file={prfUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        loading="Loading..."
      >
        <Page pageNumber={pageNumber} width={pageWidth} loading="Loading..." />
      </Document>
    </div>
  );
};

export default View;