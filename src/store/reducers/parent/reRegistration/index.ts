import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import space from './space';
import {IProgram, IStudent, IActivity} from '@/libs/types/entities';
import {IOptionType, ReRegistrationFormType} from '@/libs/types/Form';
import _ from 'lodash';

const {
  actions,
  thunks
} = space;

interface PropTypes {
  students: Array<IStudent>
  studentsIds: Array<number>
  programs: Array<IProgram>
  programsIds: Array<number>
  activities: Array<IActivity>
  formModule: {
    studentOptions: Array<IOptionType>
    programOptions: Array<IOptionType>
    activityOptions: Array<IOptionType>
    data: ReRegistrationFormType
  }
  formConfirm: {
    title: string
    open: boolean
  }
  loading: boolean
}

const initialState: PropTypes = {
  students: [],
  studentsIds: [],
  programs: [],
  programsIds: [],
  activities: [],
  formModule: {
    studentOptions: [],
    programOptions: [],
    activityOptions: [],
    data: {
      parent_id: 0,
      student_id: 0,
      program_id: 0,
      activity_ids: [],
      tuition: 0,
      tuition_discount: 0,
      tech_fee: 0,
      activities_fee: 0,
      total_fee: 0,
    }
  },
  formConfirm: {
    title: '',
    open: false,
  },
  loading: false,
};
const data = createReducer(
  initialState,
  builder => { builder
    .addCase(actions.setLoading, (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    })
    .addCase(actions.setConfirmDialog, (state, action: PayloadAction<{title: string, open: boolean}>) => {
      state.formConfirm = action.payload;
    })
    .addCase(actions.setStudentsData, (state, action: PayloadAction<Array<IStudent>>) => {
      state.students = action.payload;
      state.studentsIds = action.payload.map((item) => item.id);
    })
    .addCase(actions.setProgramsData, (state, action: PayloadAction<Array<IProgram>>) => {
      state.programs = action.payload;
      state.programsIds = action.payload.map((item) => item.id);
    })
    .addCase(actions.setActivitiesData, (state, action: PayloadAction<Array<IActivity>>) => {
      state.activities = action.payload;
    })
    .addCase(actions.setStudentOptionData, (state, action: PayloadAction<Array<IOptionType>>) => {
      state.formModule.studentOptions = action.payload;
    })
    .addCase(actions.setProgramOptionData, (state, action: PayloadAction<Array<IOptionType>>) => {
      state.formModule.programOptions = action.payload;
    })
    .addCase(actions.setActivityOptionData, (state, action: PayloadAction<Array<IOptionType>>) => {
      state.formModule.activityOptions = action.payload;
    })
    .addCase(actions.setFormData, (state, action: PayloadAction<ReRegistrationFormType>) => {
      state.formModule.data = {...state.formModule.data, ...action.payload};
      const selectedPrograms = state.programs.filter((item) => item.id === state.formModule.data.program_id);
      const selectedActivities = state.activities.filter((item) => state.formModule.data.activity_ids?.includes(item.id));
      if (selectedPrograms.length > 0) {
        state.formModule.data.tuition = selectedPrograms[0].tuition;
        state.formModule.data.tuition_discount = selectedPrograms[0].tuition_discount;
        state.formModule.data.tech_fee = selectedPrograms[0].tech_fee;
      }
      if (selectedActivities.length > 0) {
        let a_amount = 0;
        selectedActivities.forEach((item) => {
          a_amount += item.fee;
          state.formModule.data.activities_fee = a_amount;
        });
      } else {
        state.formModule.data.activities_fee = 0;
      }
      state.formModule.data.total_fee = state.formModule.data.tuition - state.formModule.data.tuition_discount + state.formModule.data.tech_fee + state.formModule.data.activities_fee;
    });
  }
);

export default data;
