import React from 'react';
import DefaultPropTypes from '@/resource/file/svg/interface';

interface PropTypes extends DefaultPropTypes {
  color: string
}

const Svg: React.FC<PropTypes> = ({ width=24, height=24, color }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill={color} d="M19.3764 20.1099C19.0364 18.7999 18.3564 17.5799 17.3864 16.6099C15.9564 15.1799 14.0164 14.3799 11.9964 14.3799C9.97644 14.3799 8.03644 15.1799 6.60644 16.6099C5.62644 17.5899 4.94644 18.7999 4.61644 20.1099C4.35644 21.1299 5.22644 21.9999 6.27644 21.9999H17.7064C18.7564 21.9999 19.6364 21.1299 19.3764 20.1099Z" />
      <path fill={color} d="M11.9918 13.4213C15.1454 13.4213 17.7019 10.8647 17.7019 7.71112C17.7019 4.5575 15.1454 2.00098 11.9918 2.00098C8.83814 2.00098 6.28162 4.5575 6.28162 7.71112C6.28162 10.8647 8.83814 13.4213 11.9918 13.4213Z" />
    </svg>
  );
};

export default Svg;