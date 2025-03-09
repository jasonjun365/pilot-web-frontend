import React from 'react';
import DefaultPropTypes from '@/resource/file/svg/interface';

interface PropTypes extends DefaultPropTypes {
  color: string
}

const Svg: React.FC<PropTypes> = ({ width=24, height=24, color }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M18.423 21.756a.834.834 0 0 0-.59-1.423H3.667V6.167a.833.833 0 1 0-1.667 0v15a.834.834 0 0 0 .833.833h15a.834.834 0 0 0 .59-.244zM22 17.833v-15A.834.834 0 0 0 21.167 2h-15a.833.833 0 0 0-.834.833v15a.833.833 0 0 0 .834.834h15a.833.833 0 0 0 .833-.834zm-4.6-6.986a.4.4 0 0 0 0-.693l-6.3-3.638a.4.4 0 0 0-.6.347v7.274a.4.4 0 0 0 .6.347l6.3-3.637z" fill={color} />
    </svg>
  );
};

export default Svg;