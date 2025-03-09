import React from 'react';
import Theme from '@/modules/AppFrame/Root/Theme';
import App from '@/modules/AppFrame/App';
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
      <App />
      <Toast />
      <YupConfig />
    </Theme>
  );
};

export default Root;