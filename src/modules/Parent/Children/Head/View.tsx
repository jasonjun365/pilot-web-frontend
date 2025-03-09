import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useTranslation } from 'react-i18next';
import ViewStylePropTypes from '@/libs/types/ViewStyle';
import SmallButton from '@/components/UI/Button/SmallButton';
import Export from '@/modules/Parent/Children/Export';
import Actions from '@/store/actions';

const {
  actions: editFormActions,
} = Actions.parent.children.editForm;

interface PropTypes extends ViewStylePropTypes {

}

const View: React.FC<PropTypes> = ({ getMixinStyle }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleAddChildClick = () => {
    dispatch(editFormActions.setEditFormTitle({title: 'Add Child', type: 'NEW'}));
    dispatch(editFormActions.setEditFormOpen(true));
  };
  
  return (
    <div className={getMixinStyle('layout')}>
      <div className={getMixinStyle('left')}><span>Children List</span></div>
      <div className={getMixinStyle('right')}>
        <div className={getMixinStyle('btn-box')}>
          <SmallButton label="Add Child" onClick={handleAddChildClick}/>
        </div>
        <div className={getMixinStyle('btn-box')}>
          <Export />
        </div>
      </div>
    </div>
  );
};

export default View;
