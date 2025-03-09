import React from 'react';
import DefaultPropTypes from '../interface';
import icons from './icons';

interface PropTypes extends DefaultPropTypes {
  type: string
  color?: string
}

const Svg: React.FC<PropTypes> = ({ type, color='', ...props}) => {
  const path = type ? type[0].toUpperCase() + type.slice(1) : '';
  // @ts-ignore
  const SpecialIcon = icons[path];
  
  return (
    <SpecialIcon {...props} color={color} />
  );
};

export default Svg;