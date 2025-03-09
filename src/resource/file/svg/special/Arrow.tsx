import React from 'react';
import PropTypes from '../interface';

const Svg: React.FC<PropTypes> = ({ width=24, height=24 }) => {
  const color = 'var(--static-white)';

  return (
    <div>
      <svg width={width} height={height} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.083 16.645V2.737a.917.917 0 1 1 1.833 0v13.908l6.844-6.843a.916.916 0 1 1 1.296 1.296l-8.773 8.773a.4.4 0 0 1-.566 0l-8.773-8.773A.917.917 0 1 1 3.24 9.802l6.843 6.843z" fill={color} />
      </svg>
    </div>
  );
};

export default Svg;