import React from 'react';
import { CircularProgress, Zoom, Avatar } from '@mui/material';
import { urlComplementary } from '@/libs/utils/index';
import AvatarIcon from '@/resource/file/svg/special/Avatar';
import thisStyle from './style.module.scss';

interface PropTypes {
  src?: string
  size?: number
  style?: any
  className?: any
}

const AvatarDivView: React.FC<PropTypes> = ({ src, size=30, style, className }) => {
  const [load, setLoad] = React.useState<'loading' | 'error' | 'loaded'>('loading');
  const hasSrc = src;

  const onLoad = (() => {
    setLoad('loaded');
  });
  
  const onError = (() => {
    setLoad('error');
  });

  return (
    <div className={thisStyle.layout}>
      {(hasSrc && load !== 'loaded') && (
        <div className={thisStyle.loadingDiv}>
          {load === 'loading' &&
          <CircularProgress size={size} />}
          {load === 'error' &&
          <Avatar style={{ ...style, width: size, height: size }} className={className}><AvatarIcon width={size} height={size} /></Avatar>}
        </div>
      )}
      {!hasSrc ? (
        <Avatar style={{ ...style, width: size, height: size }} className={className}><AvatarIcon width={size} height={size} /></Avatar>
      ) : (
        <>
          <img onLoad={onLoad} onError={onError} src={urlComplementary(src)} alt="img" className={thisStyle.error} />
          <Zoom in={load === 'loaded'}>
            <Avatar src={urlComplementary(src)} style={{ ...style, width: size, height: size }} className={`${className} ${thisStyle[load]} ${thisStyle.avatar}`} />
          </Zoom>
        </>
      )}
    </div>
  );
};

export default AvatarDivView;