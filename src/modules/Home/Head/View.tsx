import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import ViewStylePropTypes from '@/libs/types/ViewStyle';
import SmallButton from '@/components/UI/Button/SmallButton';

interface PropTypes extends ViewStylePropTypes {

}

const View: React.FC<PropTypes> = ({ getMixinStyle }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleGoSignin = () => {
    window.location.href = '/signin';
  };

  const handleGoSignup = () => {
    window.location.href = '/signup';
  };

  return (
    <div className={getMixinStyle('layout')}>
      <div className={getMixinStyle('left')}><span>Pilot Web Frontend</span></div>
      <div className={getMixinStyle('right')}>
        <div className={getMixinStyle('btn-box')}>
          <SmallButton label="Sign-in" onClick={handleGoSignin}/>
        </div>
        <div className={getMixinStyle('btn-box')}>
          <SmallButton label="Sign-up" onClick={handleGoSignup}/>
        </div>
      </div>
    </div>
  );
};

export default View;
