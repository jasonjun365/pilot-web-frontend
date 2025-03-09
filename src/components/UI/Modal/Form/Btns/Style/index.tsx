import React from 'react';
import ViewStyle from '@/components/UI/ViewStyle';
import View from '../View';
import style from './index.module.scss';

const mediaStyles: any = ([
  'down_sm',
  'down_md',
  'down_lg',
  'up_lg',
]).reduce((p: any, n: string) => ({ ...p, [n]: require(`./${n}.module.scss`).default }), {});

const Style: React.FC<any> = (props) => {
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
