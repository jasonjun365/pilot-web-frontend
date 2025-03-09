import React from 'react';
// import { Backdrop , CircularProgress } from '@mui/material';
import Theme from '@/modules/AppFrame/Root/Theme';
import App from '@/modules/AppFrame/App';
import Auth from '@/modules/AppFrame/Auth';
import Toast from '@/modules/AppFrame/Toast';
import YupConfig from './YupConfig';
import 'emoji-mart/css/emoji-mart.css';
import '@/resource/language';
import '@/libs/styles/index.scss';
import '@/libs/styles/emoji-match/index.css';

interface PropTypes {
  isLogin: boolean
  loading: boolean
}

const Root: React.FC<PropTypes> = ({ isLogin, loading }) => {
  return (
    <Theme>
      {isLogin ? (
        <App />
      ) : (
        <Auth />
      )}
      <Toast />
      <YupConfig />
    </Theme>
  );
};

export default Root;