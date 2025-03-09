import React, {useCallback} from 'react';
import { useTranslation } from 'react-i18next';
import ViewStylePropTypes from '@/libs/types/ViewStyle';
import SmallButton from '@/components/UI/Button/SmallButton';

interface PropTypes extends ViewStylePropTypes {

}

const View: React.FC<PropTypes> = ({ getMixinStyle }) => {
  const { t } = useTranslation();

  const handleHomeButtonPress = useCallback(() => {
    window.location.href = '/';
  }, []);

  const handleGoSignup = () => {
    window.location.href = '/signup';
  };

  return (
    <div className={getMixinStyle('layout')}>
      <div className={getMixinStyle('left')}>
        <span style={{cursor: 'pointer'}} onClick={handleHomeButtonPress}>Home</span>
      </div>
      <div className={getMixinStyle('right')}>
        <div className={getMixinStyle('btn-box')}>
          <SmallButton label="Sign-up" onClick={handleGoSignup}/>
        </div>
      </div>
    </div>
  );
};

export default View;
