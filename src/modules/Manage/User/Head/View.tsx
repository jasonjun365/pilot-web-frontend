import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useTranslation } from 'react-i18next';
import ViewStylePropTypes from '@/libs/types/ViewStyle';
import SmallButton from '@/components/UI/Button/SmallButton';
import Actions from '@/store/actions';

const {
  actions: editFormActions,
} = Actions.manage.user.editForm;

interface PropTypes extends ViewStylePropTypes {

}

const View: React.FC<PropTypes> = ({ getMixinStyle }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleAddClick = () => {
    dispatch(editFormActions.setEditFormTitle({title: 'Add User', type: 'NEW'}));
    dispatch(editFormActions.setEditFormOpen(true));
  };
  
  return (
    <div className={getMixinStyle('layout')}>
      <div className={getMixinStyle('left')}><span>User List</span></div>
      <div className={getMixinStyle('right')}>
        <div className={getMixinStyle('btn-box')}>
          <SmallButton label="Add User" onClick={handleAddClick}/>
        </div>
      </div>
    </div>
  );
};

export default View;
