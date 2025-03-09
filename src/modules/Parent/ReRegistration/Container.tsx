
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useLocation} from 'react-router-dom';
import {IStudent, IProgram, IActivity} from '@/libs/types/entities';
import Actions from '@/store/actions';
import {activityList, myChildrenList, programList} from '@/faceData';

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
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const _sid: any = searchParams.get('sid') || 0;
  const userState = useSelector((state: any) => ({
    data: state.basic.user.data
  }));

  useEffect(() => {
    // set student id and parent id
    if (_sid) {
      const _data:any = {
        parent_id: userState.data.id,
        student_id: parseInt(_sid, 10)
      };
      dispatch(thisActions.setFormData(_data));
      dispatch(thisActions.setFormInitialValues({
        student_id: parseInt(_sid, 10),
        program_id: 0,
        activity_ids: [],
      }));
    }
  }, [_sid]);

  useEffect(() => {
    // set studentsData
    const _s_data = JSON.parse(JSON.stringify(myChildrenList));
    dispatch(thisActions.setStudentsData(_s_data));
    const studentsData = _s_data.map((item: IStudent) => (
      {value: item.id, label: item.name}
    ));
    // studentsData.unshift({value: 0, label: 'Choose'});
    dispatch(thisActions.setStudentOptionData(studentsData));

    // set programsData
    const _p_data = JSON.parse(JSON.stringify(programList));
    dispatch(thisActions.setProgramsData(_p_data));
    const programsData = _p_data.map((item: IProgram) => (
      {value: item.id, label: item.name}
    ));
    // programsData.unshift({value: 0, label: 'Choose'});
    dispatch(thisActions.setProgramOptionData(programsData));

    // set activitiesData
    const _a_data = JSON.parse(JSON.stringify(activityList));
    dispatch(thisActions.setActivitiesData(_a_data));
    const activitiesData = _a_data.map((item: IActivity) => (
      {value: item.id, label: item.name}
    ));
    dispatch(thisActions.setActivityOptionData(activitiesData));
  }, []);

  return (
    <View student_id={_sid} />
  );
};

export default ContainerWrap;