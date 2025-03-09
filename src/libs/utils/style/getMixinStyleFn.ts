import clsx from 'clsx';
import StylePropTypes from '@/components/UI/Types/Style';

interface PropTypes {
  (style: StylePropTypes, mediaStyle: StylePropTypes, mode: string): Function
}

const getMixinStyleFn: PropTypes = (style, mediaStyle, mode) => {
  return (name: string, names?: string[]) => (
    clsx(style[name], mediaStyle[name], style[`${mode}`], mediaStyle[`${mode}`]) + (names? ' ' + 
    clsx(names.map((s: string) => ([style[`${s}`], mediaStyle[`${s}`]]))) + ' ' + 
    clsx(names.map((s: string) => ([style[`${mode}-${s}`], mediaStyle[`${mode}-${s}`]]))): '')
  );
};

export default getMixinStyleFn;