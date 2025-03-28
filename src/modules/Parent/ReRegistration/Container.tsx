
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Actions from '@/store/actions';

const {
  actions: thisActions,
  thunks: thisThunks,
} = Actions.parent.reRegistration;

interface PropTypes { // states
  View: React.FC<any>
}

interface PropTypes { // methods

}

const ContainerWrap: React.FC<PropTypes> = ({ View }) => {
  const dispatch = useDispatch();
  const userState = useSelector((state: any) => ({
    data: state.basic.user.data
  }));

  useEffect(() => {
    // GET Students Data
    const _s_params = {
      parentId: userState.data.id,
      page: 1,
      size: 20
    };
    dispatch(thisThunks.getStudents({params: _s_params}));

    // GET Programs Data
    const _p_params = {
      page: 1,
      size: 50
    };
    dispatch(thisThunks.getPrograms({params: _p_params}));

    // GET Activities Data
    const _a_params = {
      page: 1,
      size: 50
    };
    dispatch(thisThunks.getActivities({params: _a_params}));
  }, []);

  return (
    <View />
  );
};

export default ContainerWrap;