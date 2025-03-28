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
  students: Array<IStudent> // used
  programs: Array<IProgram> // used
  activities: Array<IActivity>  // used
  formModule: {
    studentOptions: Array<IOptionType> // used
    programOptions: Array<IOptionType> // used
    activityOptions: Array<IOptionType> // used
    data: ReRegistrationFormType
  }
  formConfirm: {
    title: string
    open: boolean
  }
  loading: boolean,
  pathname: string,
}

const initialState: PropTypes = {
  students: [],
  programs: [],
  activities: [],
  formModule: {
    studentOptions: [],
    programOptions: [],
    activityOptions: [],
    data: {
      parentId: '',
      studentId: 0,
      programId: 0,
      activityIds: [],
      tuition: 0,
      tuitionDiscount: 0,
      techFee: 0,
      activitiesFee: 0,
      totalFee: 0,
    }
  },
  formConfirm: {
    title: '',
    open: false,
  },
  loading: false,
  pathname: ''
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
    .addCase(actions.setPathname, (state, action: PayloadAction<string>) => {
      state.pathname = action.payload;
    })
    .addCase(actions.resetFormData, (state, action: PayloadAction<{title: string, open: boolean}>) => {
      state.formModule.data = {
        parentId: '',
        studentId: 0,
        programId: 0,
        activityIds: [],
        tuition: 0,
        tuitionDiscount: 0,
        techFee: 0,
        activitiesFee: 0,
        totalFee: 0,
      };
      console.log('======== resetFormData: ', state.formModule.data);
    })
    .addCase(actions.setFormData, (state, action: PayloadAction<ReRegistrationFormType>) => {
      state.formModule.data = {...state.formModule.data, ...action.payload};
      console.log('======== setFormData: ', state.formModule.data);
      const selectedPrograms = state.programs.filter((item) => item.id === state.formModule.data.programId);
      const selectedActivities = state.activities.filter((item) => state.formModule.data.activityIds?.includes(item.id));
      if (selectedPrograms.length > 0) {
        state.formModule.data.tuition = selectedPrograms[0].tuition;
        state.formModule.data.tuitionDiscount = selectedPrograms[0].tuitionDiscount;
        state.formModule.data.techFee = selectedPrograms[0].techFee;
      }
      if (selectedActivities.length > 0) {
        let a_amount = 0;
        selectedActivities.forEach((item) => {
          a_amount += item.fee;
          state.formModule.data.activitiesFee = a_amount;
        });
      } else {
        state.formModule.data.activitiesFee = 0;
      }
      state.formModule.data.totalFee = state.formModule.data.tuition - state.formModule.data.tuitionDiscount + state.formModule.data.techFee + state.formModule.data.activitiesFee;
    })
    .addCase(thunks.getStudents.pending, (state, action: PayloadAction<any, any, any>) => {
      state.loading = true;
    })
    .addCase(thunks.getStudents.fulfilled, (state, action: PayloadAction<any, any, any>) => {
      console.log('thunks.getStudents.fulfilled: ', action.payload.data);
      if (action.payload.data?.records) {
        state.students = action.payload.data.records;
        state.formModule.studentOptions = action.payload.data.records.map((item: IStudent) => ({label: item.name, value: item.id}));
      }
      state.loading = false;
    })
    .addCase(thunks.getStudents.rejected, (state) => {
      state.loading = false;
    })
    .addCase(thunks.getPrograms.pending, (state, action: PayloadAction<any, any, any>) => {
      state.loading = true;
    })
    .addCase(thunks.getPrograms.fulfilled, (state, action: PayloadAction<any, any, any>) => {
      console.log('thunks.getPrograms.fulfilled: ', action.payload.data);
      if (action.payload.data?.records) {
        state.programs = action.payload.data.records;
        state.formModule.programOptions = action.payload.data.records.map((item: IProgram) => ({label: item.name, value: item.id}));
      }
      state.loading = false;
    })
    .addCase(thunks.getPrograms.rejected, (state) => {
      state.loading = false;
    })
    .addCase(thunks.getActivities.pending, (state, action: PayloadAction<any, any, any>) => {
      state.loading = true;
    })
    .addCase(thunks.getActivities.fulfilled, (state, action: PayloadAction<any, any, any>) => {
      console.log('thunks.getActivities.fulfilled: ', action.payload.data);
      if (action.payload.data?.records) {
        state.activities = action.payload.data.records;
        state.formModule.activityOptions = action.payload.data.records.map((item: IActivity) => ({label: item.name, value: item.id}));
      }
      state.loading = false;
    })
    .addCase(thunks.getActivities.rejected, (state) => {
      state.loading = false;
    })
    .addCase(thunks.postTuition.pending, (state, action: PayloadAction<any, any, any>) => {
      state.loading = true;
    })
    .addCase(thunks.postTuition.fulfilled, (state, action: PayloadAction<any, any, any>) => {
      console.log('thunks.getActivities.fulfilled: ', action.payload.data);
      if (action.payload.data?.records) {
        state.activities = action.payload.data.records;
        state.formModule.activityOptions = action.payload.data.records.map((item: IActivity) => ({label: item.name, value: item.id}));
      }
      state.loading = false;
    })
    .addCase(thunks.postTuition.rejected, (state) => {
      state.loading = false;
    });
  }
);

export default data;
