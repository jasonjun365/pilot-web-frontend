import React from 'react';
import { Dialog, DialogContent, DialogTitle, DialogActions, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ImageView from '@/components/UI/Photo/ImageView';
import thisStyle from './style.module.scss';

interface DataTypes {
  url: string
  label?: string
}

interface PropTypes { // states
  children: string | React.ReactNode
  data: DataTypes[]
  title?: string
  className?: string
  style?: object
}

const DialogCarousel: React.FC<PropTypes> = ({ children, data, title, className, style}) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [nowShow, setNowShow] = React.useState<number>(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        className={className}
        style={style}
        onClick={handleClickOpen}
      >
        {children}
      </div>
      <Dialog open={open} maxWidth='md' onClose={handleClose} className={thisStyle.layout}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent className={thisStyle.content}>
          <div className={`${thisStyle.box} ${data.length === 1 ? thisStyle.one : ''}`}>
            {data.map((t: any, i: number) => (
              <div key={i} className={`${thisStyle.item} ${nowShow === i ? thisStyle.show : ''}`}>
                {t.label &&
                  <span>{t.label}</span>
                }
                <a href={t.url} target="_blank" className={thisStyle.img}>
                  <ImageView src={t.url} alt={'img-' + i} />
                </a>
              </div>
            ))}
          </div>
          {data.length > 1 &&
            <div className={thisStyle.arrow}>
              <IconButton className={thisStyle.left} onClick={() => setNowShow(nowShow > 0 ? nowShow - 1 : data.length - 1 )}>
                <ArrowBackIcon fontSize='small' />
              </IconButton>
              <IconButton className={thisStyle.right} onClick={() => setNowShow(nowShow < data.length - 1 ? nowShow + 1 : 0 )}>
                <ArrowForwardIcon fontSize='small' />
              </IconButton>
            </div>
          }
        </DialogContent>
        {data.length > 1 &&
          <DialogActions>
            <div className={thisStyle.btns}>
              {data.map((_t: any, i: number) => (
                <span key={i} onClick={() => setNowShow(i)} className={`${nowShow === i ? thisStyle.now : ''}`}>
                  {i + 1}
                </span>
              ))}
            </div>
          </DialogActions>
        }
      </Dialog>
    </>
  );
};

export default DialogCarousel;