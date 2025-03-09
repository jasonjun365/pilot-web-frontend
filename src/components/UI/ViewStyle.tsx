import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { getBreakpointsAndMedaStyle, getMixinStyleFn } from '@/libs/utils/index';
import StylesPropTypes from './Types/Styles';
import StylePropTypes from './Types/Style';

interface PropTypes {
  View: React.FC<any>
  style: StylePropTypes
  mediaStyles: StylesPropTypes
  [n: string]: any
}

const ViewStyle: React.FC<PropTypes> = ({ View, style, mediaStyles, ...props }) => {
  const theme = useTheme();

  const mode = theme.palette.mode;

  const { mediaStyle, breakpoints } = getBreakpointsAndMedaStyle(useMediaQuery, theme, mediaStyles);

  const getMixinStyle = getMixinStyleFn(style, mediaStyle, mode);

  return (
    <View
      {...props}
      mode={mode}
      style={style}
      mediaStyle={mediaStyle}
      breakpoints={breakpoints}
      getMixinStyle={getMixinStyle}
    />
  );
};

export default ViewStyle;
