import React from 'react';
import { useSelector } from 'react-redux';
import View from './View';

interface PropTypes {
  children: React.ReactNode
}

const Theme: React.FC<PropTypes> = props => {
  const lightState = useSelector((state: any) => state.basic.light);
  
  const states = {
    lightOpen: lightState.open
  };

  return (
    <View
      {...states}
      {...props}
    />
  );
};

export default Theme;