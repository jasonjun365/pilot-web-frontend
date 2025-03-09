import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { IconButton, Button, Slider } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import ReadOnlyDialog from '@/components/UI/Dialog/ReadOnlyDialog';
import ViewStylePropTypes from '@/libs/types/ViewStyle';

let canvas: any; let ctx: any; let img: any;
let startX: number; let startY: number;
let disX: number; let disY: number;
let width: number; let height: number;
let originWidth: number; let originHeight: number;
let ctxOriginImgSize: any = {};
let cropStartX: number; let cropEndX: number;
let cropStartY: number; let cropEndY: number;
  
let typeProps = {
  '1:1': {
    previewWidth: {
      down_sm: 240,
      down_md: 432,
      normal: 600,
    },
    maxWidth: 400,
    scale: [15, 15],
    shape: 'round',
  },
  '3:1': {
    previewWidth: {
      down_sm: 240,
      down_md: 432,
      normal: 600,
    },
    maxWidth: 1500,
    scale: [15, 5],
    shape: 'rect',
  },
  '16:9': {
    previewWidth: {
      down_sm: 240,
      down_md: 432,
      normal: 640,
    },
    maxWidth: 1280,
    scale: [16, 9],
    shape: 'rect',
  }
};

interface PropTypes extends ViewStylePropTypes { // states
  name: string
  type?: '1:1' | '3:1' | '16:9'
  children: React.ReactNode // children is button
}

interface PropTypes { // methods
  confirmFn: (v: any) => any
}

const Crop: React.FC<PropTypes> = ({ name, type='16:9', children, confirmFn, breakpoints, getMixinStyle }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const fileId = 'cropImageFile-' + name + Date.now();
  const canvasRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(Object);
  const [zoom, setZoom] = useState(0);
  const [time, setTime] = useState(0);
  const previewWidth = breakpoints['down_sm'] ? typeProps[type].previewWidth['down_sm'] : breakpoints['down_md'] ? typeProps[type].previewWidth['down_md'] : typeProps[type].previewWidth['normal'];
  const maxWidth = typeProps[type].maxWidth;
  const scale = typeProps[type].scale;
  const canvasWidth = Math.floor((previewWidth / scale[0]) * (scale[0] + 2));
  const canvasHeight = Math.floor((canvasWidth / scale[0]) * scale[1]);
  const modalWidth = Math.floor((previewWidth / scale[0]) * 2);
  const modalHeight = Math.floor((modalWidth / scale[0]) * scale[1]);
  const limitStartX = Math.floor(modalWidth / 2);
  const limitStartY = Math.floor(modalHeight / 2);
  const limitEndX = Math.floor(canvasWidth - limitStartX);
  const limitEndY = Math.floor(canvasHeight - limitStartY);
  const lineWidth = 4;

  // console.log('canvas:', canvasWidth, ':', canvasHeight);
  // console.log('modal:', modalWidth, ':', modalHeight);
  // console.log('limitX:', limitEndX, 'limitStartX:', limitStartX);
  // console.log('limitEndY:', limitEndY, 'limitStartY:', limitStartY);
  // console.log('limit:', limitEndX - limitStartX, ':', limitEndY - limitStartY);

  const initialOpen = (file: any) => {
    setOpen(true);
    setFile(file);
    setZoom(0);
  };

  const handleConfirm = () => {
    canvas.setAttribute('width', ctxOriginImgSize.width);
    canvas.setAttribute('height', ctxOriginImgSize.height);

    ctx.drawImage(img, 0, 0, ctxOriginImgSize.width, ctxOriginImgSize.height);

    const data = ctx.getImageData(
      cropStartX,
      cropStartY,
      cropEndX,
      cropEndY,
    );

    const resultSize = {
      width: cropEndX - cropStartX,
      height: cropEndY - cropStartY,
    };
    
    const scaleBase = Number(type.split(':')[0]);

    const getNewScale = (width: number) => ((value: number): any => value >= maxWidth ? maxWidth : value % scaleBase ? getNewScale(value + value % scaleBase) : value)(width);

    const newScale = getNewScale(resultSize.width);

    const correctionSize = {
      width: newScale,
      height: newScale / scale[0] * scale[1],
    };

    // console.log('resultSize', resultSize);
    // console.log('correctionSize', correctionSize);

    canvas.setAttribute('width', resultSize.width);
    canvas.setAttribute('height', resultSize.height);

    ctx.putImageData(data, 0, 0);

    canvas.toBlob((blob: any) => {
      canvas.setAttribute('width', correctionSize.width);
      canvas.setAttribute('height', correctionSize.height);
      const newImg = new Image();
      newImg.src = URL.createObjectURL(blob);
      newImg.onload = () => {
        ctx.drawImage(newImg, 0, 0, correctionSize.width, correctionSize.height);
        canvas.toBlob((blob2: any) => {
          confirmFn(
            new File([blob2], 'tempName.jpeg', {
              type: 'image/jpeg',
            }),
          );
        });
        canvas.setAttribute('width', canvasWidth);
        canvas.setAttribute('height', canvasHeight);
        handleClose();
      };
    });
  };

  const handleClose = () => {
    setOpen(false);
    setFile(null);
  };

  const draw = () => {
    if (startX > limitStartX) {
      startX = limitStartX;
    } else if (startX < limitEndX - width) {
      startX = limitEndX - width;
    }

    startX = startX > limitStartX ? Math.floor(startX) : Math.ceil(startX);

    if (startY > limitStartY) {
      startY = limitStartY;
    } else if (startY < limitEndY - height) {
      startY = limitEndY - height;
    }

    startY = startY > limitStartY ? Math.floor(startY) : Math.ceil(startY);

    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, startX, startY, width, height);

    ctx.lineWidth = lineWidth;
    ctx.fillStyle = '#0000004d';
    ctx.strokeStyle = 'steelblue';

    if (typeProps[type].shape === 'round') {
      ctx.beginPath();
      ctx.rect(0, 0, canvasWidth, canvasHeight);
      ctx.arc(canvasWidth / 2,canvasHeight / 2, (limitEndY - limitStartY) / 2 + lineWidth / 2, 0, 2*Math.PI, true);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(canvasWidth / 2,canvasHeight / 2, (limitEndY - limitStartY) / 2 + lineWidth / 2, 0, 2*Math.PI);
      ctx.stroke();
    } else {
      ctx.fillRect(0, 0, canvas.width, limitStartY);
      ctx.fillRect(0, limitEndY, canvas.width, canvas.height);
      ctx.fillRect(0, limitStartY, limitStartX, limitEndY - limitStartY);
      ctx.fillRect(
        limitEndX,
        limitStartY,
        limitStartX,
        limitEndY - limitStartY,
      );
      ctx.strokeRect(
        limitStartX - lineWidth / 2,
        limitStartY - lineWidth / 2,
        canvas.width - modalWidth + lineWidth,
        canvas.height - modalHeight + lineWidth,
      );
    }

    const startXscale = -((startX - limitStartX) / Math.floor(width)).toFixed(4);
    const endXscale = -((startX - limitEndX) / Math.floor(width)).toFixed(4);
    const startYscale = -((startY - limitStartY) / Math.floor(height)).toFixed(4);
    const endYscale = -((startY - limitEndY) / Math.floor(height)).toFixed(4);

    cropStartX = Math.floor(startXscale * ctxOriginImgSize.width);
    cropEndX = Math.floor(endXscale * ctxOriginImgSize.width);
    cropStartY = Math.floor(startYscale * ctxOriginImgSize.height);
    cropEndY = Math.floor(endYscale * ctxOriginImgSize.height);
    
    // show data

    // ctx.font = '26px tahoma';
    // ctx.fillStyle = 'white';
    // ctx.shadowColor = 'black';
    // ctx.shadowOffsetX = 1;
    // ctx.shadowOffsetY = 1;

    // ctx.fillText('startX: ' + (startXscale * 100).toFixed(2) + '%', limitStartX - lineWidth / 2, limitStartY + 30);
    // ctx.fillText('startX: ' + cropStartX, limitStartX - lineWidth / 2, limitStartY + 60);
    // ctx.fillText('endX: ' + (endXscale * 100).toFixed(2) + '%', limitEndX - lineWidth / 2 - 180, limitStartY + 30);
    // ctx.fillText('endX: ' + cropEndX, limitEndX - lineWidth / 2 - 180, limitStartY + 60);

    // ctx.fillText('startY: ' + (startYscale * 100).toFixed(2) + '%', limitStartX - lineWidth / 2, limitStartY + 100);
    // ctx.fillText('startY: ' + cropStartY, limitStartX - lineWidth / 2, limitStartY + 130);
    // ctx.fillText('endY: ' + (endYscale * 100).toFixed(2) + '%', limitEndX - lineWidth / 2 - 180, limitStartY + 100);
    // ctx.fillText('endY: ' + cropEndY, limitEndX - lineWidth / 2 - 180, limitStartY + 130);

    // ctx.fillText('width: ' + (cropEndX - cropStartX), limitStartX - lineWidth / 2, limitStartY + 170);
    // ctx.fillText('height: ' + (cropEndY - cropStartY), limitStartX - lineWidth / 2, limitStartY + 200);

    // ctx.shadowOffsetX = 0;
    // ctx.shadowOffsetY = 0;
  };

  const changeScale = (z: number) => {
    const newZoom = z >= 100 ? 100 : z <= 0 ? 0 : z;
    const num = 1 + newZoom / 100;
    const prevWidth = width;
    const prevHeight = height;
    width = originWidth * num;
    height = originHeight * num;
    startX = startX - (width - prevWidth) / 2;
    startY = startY - (height - prevHeight) / 2;
    draw();
    setZoom(newZoom);
  };

  const initialFile = () => {
    canvas = canvasRef.current;
    ctx = canvas.getContext('2d');
    if (file.constructor === String) {
      initialDrawImage(file as string);
    } else {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const tempImg = document.createElement('img');
        tempImg.src = reader.result as string;
        tempImg.onload = () => {
          ctxOriginImgSize = {
            width: tempImg.width, 
            height: tempImg.height
          };
          initialDrawImage(reader.result as string);
        };
      };
    }
  };

  const initialParams = () => {
    const isWidthScale = modalWidth / img.width > modalHeight / img.height;

    if (isWidthScale) {
      width = limitEndX - modalWidth / 2;
      const nowScale = width / img.width;
      height = Math.floor(nowScale * img.height);
    } else {
      height = limitEndY - modalHeight / 2;
      const nowScale = height / img.height;
      width = Math.floor(nowScale * img.width);
    }

    originWidth = width;
    originHeight = height;

    width = originWidth * Number(1 + '.' + zoom);
    height = originHeight * Number(1 + '.' + zoom);

    startX = (canvas.width - width) / 2;
    startY = (canvas.height - height) / 2;
  };

  const drawDown = (e: any) => {
    const ev = e.touches ? e.touches[0] : e;
    disX = ev.clientX - startX;
    disY = ev.clientY - startY;
    window.addEventListener('mousemove', drawMove);
    window.addEventListener('mouseup', drawEnd);
    window.addEventListener('touchmove', drawMove);
    window.addEventListener('touchend', drawEnd);
  };
      
  const drawMove = (e: any) => {
    const ev = e.touches ? e.touches[0] : e;
    startX = ev.clientX - disX;
    startY = ev.clientY - disY;
    draw();
  };

  const drawEnd = () => {
    window.removeEventListener('mousemove', drawMove);
    window.removeEventListener('mouseup', drawEnd);
    window.removeEventListener('touchmove', drawMove);
    window.removeEventListener('touchend', drawEnd);
  };

  const initialEvent = () => {
    canvas.addEventListener('mousedown', drawDown);
    canvas.addEventListener('touchstart', drawDown);
  };

  const initialDrawImage = (url: string) => {
    img = new Image();
    img.src = url;
    img.onload = () => {
      initialParams();
      draw();
      initialEvent();
    };
  };

  let refresh: any = () => {
    setTime(time + 1);
  };

  useEffect(() => {
    return () => {
      refresh = null;
    };
  }, []);

  useEffect(() => {
    if (file && canvasRef.current) {
      initialFile();
    }
    if (open && !canvasRef.current) {
      refresh();
    }
  }, [file, time]);
  
  return (
    <div className={getMixinStyle('layout')}>
      <input
        id={fileId}
        type='file'
        className={getMixinStyle('input')}
        accept="image/jpeg, image/png"
        onChange={(e: any) => {
          const originFile = e && e.target.files[0];
          const isJPG = originFile?.type === 'image/jpeg' || originFile?.type === 'image/png';
          if (!isJPG) {
            const msg = t('message.mustJPGOrPNG');
            dispatch({ type: 'basic/toast/addData', payload: { msg, type: 'warning' }});
          } else {
            const file: any = new File([originFile], 'tempName.' + originFile.type.split('/')[1], {
              type: originFile.type,
            });
            initialOpen(file);
          }
          e.target.type = 'text';
          e.target.type = 'file';
        }}
      />
      <label htmlFor={fileId} className={getMixinStyle('label')}>
        {children}
      </label>
      <ReadOnlyDialog
        title={t('title.crop')}
        open={open}
        loading={false}
        handleClose={handleClose}
        btns={(
          <Button
            color="primary"
            onClick={handleConfirm}
            className={getMixinStyle('btn', ['confirm'])}
          >
            {t('btn.done')}
          </Button>
        )}
      >
        <div className={getMixinStyle('dialogContent')}>
          <div
            style={{
              width: canvasWidth,
              height: canvasHeight,
              display: 'flex',
            }}
          >
            <canvas
              ref={canvasRef}
              width={canvasWidth}
              height={canvasHeight}
              className={getMixinStyle('canvas')}
              onWheel={(e) => {
                const isUp = e.deltaY < 0;
                changeScale(isUp ? zoom + 1 : zoom - 1);
              }}
            />
          </div>
          <div className={getMixinStyle('zoom')}>
            <IconButton
              className={`${getMixinStyle('zoomIcon', ['left'])}`}
              color="secondary"
              onClick={() => changeScale(zoom - 10)}
            >
              <ZoomOutIcon />
            </IconButton>
            <Slider
              className={getMixinStyle('slider')}
              color="secondary"
              value={zoom}
              onChange={(_e: any, newValue: any) => {
                changeScale(newValue);
              }}
            />
            <IconButton
              className={getMixinStyle('zoomIcon', ['right'])}
              color="secondary"
              onClick={() => changeScale(zoom + 10)}
            >
              <ZoomInIcon />
            </IconButton>
          </div>
        </div>
      </ReadOnlyDialog>
    </div>
  );
};

export default Crop;