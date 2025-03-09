import React from 'react';
import { useTranslation } from 'react-i18next';
import { CircularProgress, Tooltip, Zoom } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material//HighlightOff';
import { urlComplementary } from '@/libs/utils/index';
import thisStyle from './style.module.scss';

interface PropTypes {
  src: string
  alt?: string
  maxWidth?: number
  maxHeight?: number
  fullWidth?: boolean
  fullHeight?: boolean
  style?: any
  className?: string
  imgClassName?: string
  loadingDivStyle?: any
}

const ImgView: React.FC<PropTypes> = ({ src, alt='img', maxWidth=0, maxHeight=0, fullWidth=false, fullHeight=false, style, className, imgClassName, loadingDivStyle }) => {
  const { t } = useTranslation();
  const [width, setWidth] = React.useState<string>('');
  const [height, setHeight] = React.useState<string>('');
  const [load, setLoad] = React.useState<'loading' | 'error' | 'loaded'>('loading');

  const onLoad = ((e: any) => {
    const t = e.target;
    const w = t.width;
    const h = t.height;

    setWidth(fullWidth ? '100%' : w > maxWidth ? maxWidth : w);
    setHeight(fullHeight ? '100%' : h > maxHeight ? maxHeight : h);
    setLoad('loaded');
  });
  
  const onError = (() => {
    setLoad('error');
  });

  return (
    <div className={`${thisStyle.layout} ${className ? className : ''}`} style={fullWidth ? { width: '100%' } : {}}>
      {load !== 'loaded' && (
        <div className={thisStyle.loadingDiv} style={loadingDivStyle}>
          {load === 'loading' && (
            <CircularProgress size={30} />
          )}
          {load === 'error' && (
            <Tooltip title={`${t('tips.notFound')}`} placement='top' arrow>
              <HighlightOffIcon style={{ fontSize: 30 }} />
            </Tooltip>
          )}
        </div>
      )}
      <Zoom in={load === 'loaded'}>
        <img onLoad={onLoad} onError={onError} src={urlComplementary(src)} alt={alt} style={{ ...style, width: width || 'auto', height: height || 'auto' }} className={`${thisStyle[load]} ${imgClassName ? imgClassName : ''}`} />
      </Zoom>
    </div>
  );
};

export default ImgView;