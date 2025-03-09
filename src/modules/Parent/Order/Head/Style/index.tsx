import React from 'react';
import ViewStyle from '@/components/UI/ViewStyle';
import style from './index.module.scss';

const mediaStyles: any = ([
  'down_sm',
  'down_md',
  'down_lg',
  'up_lg',
]).reduce((p: any, n: string) => ({ ...p, [n]: require(`./${n}.module.scss`).default }), {});

const Style: React.FC<any> = ({ View, ...props}) => {
  return (
    <ViewStyle
      {...props}
      View={View}
      style={style}
      mediaStyles={mediaStyles}
    />
  );
};

export default Style;
