import BreakpointsPropTypes from '@/libs/types/Breakpoints';
import StylesPropTypes from '@/components/UI/Types/Styles';
import StylePropTypes from '@/components/UI/Types/Style';

interface PropTypes {
  (useMediaQuery: any, theme: any, mediaStyles: StylesPropTypes): any
}

const getBreakpointsAndMedaStyle: PropTypes = (useMediaQuery, theme, mediaStyles) => {
  const breakpoints: BreakpointsPropTypes = Object.keys(mediaStyles).map(t => ([t, useMediaQuery(theme.breakpoints[t.split('_')[0]](t.split('_')[1]))])).reduce((p: any, n: any) => ({...p, [n[0]]: n[1]}), {});
  const mediaStyle: StylePropTypes = mediaStyles[String(Object.entries(breakpoints).find((t: any) => t[1])?.[0])];

  return {
    breakpoints,
    mediaStyle,
  };
};

export default getBreakpointsAndMedaStyle;