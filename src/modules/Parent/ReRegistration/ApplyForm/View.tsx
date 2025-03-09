import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import { Input, Select } from '@/components/UI';
import { Button, FormLabel } from '@mui/material';
import * as Yup from 'yup';
import {useNavigate} from 'react-router-dom';
import ViewStylePropTypes from '@/libs/types/ViewStyle';
import {useTranslation} from 'react-i18next';
import Actions from '@/store/actions';

const {
  actions: thisActions,
  thunks: thisThunks,
} = Actions.parent.reRegistration;

interface PropTypes extends ViewStylePropTypes {
  student_id: number
}

const View: React.FC<PropTypes> = ({student_id, getMixinStyle, ...props}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const thisState = useSelector((state: any) => state.parent.reRegistration);

  const states = {
    studentsIds: thisState.studentsIds,
    programsIds: thisState.programsIds,
    studentOptions: thisState.formModule.studentOptions,
    programOptions: thisState.formModule.programOptions,
    activityOptions: thisState.formModule.activityOptions,
    data: thisState.formModule.data,
    loading: thisState.loading,
  };

  const validationSchema = useMemo(() => Yup.object().shape({
    student_id: Yup.number().required(t('Missing required field')),
    program_id: Yup.number().required(t('Missing required field')),
  }), [t]);
  const onSubmit = useCallback((values: any) => {
    // console.log('values', values);
    if (values.student_id && values.program_id) {
      dispatch(thisActions.setConfirmDialog({title: 'Confirmation', open: true}));
    }
  }, []);
  const onValuesChange = useCallback((e: any, name: string) => {
    const _data: any = {};
    _data[name] = e.target.value;
    dispatch(thisActions.setFormData(_data));
  }, []);

  return (
    <div className={getMixinStyle('layout')}>
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          student_id: student_id,
          program_id: 0,
          activity_ids: []
        }}
        onSubmit={onSubmit}
      >
        {({errors, touched}) => (
          <Form>
            <div className={getMixinStyle('formRow')}>
              <FormLabel>Student</FormLabel>
              <Field
                name="student_id"
                label="Student"
                options={states.studentOptions}
                component={Select}
                onCustomChange={(e: any, name: string) => {
                  onValuesChange(e, name);
                }}
              />
            </div>
            <div className={getMixinStyle('formRow')}>
              <FormLabel>Program</FormLabel>
              <Field
                name="program_id"
                label="Program"
                options={states.programOptions}
                component={Select}
                onCustomChange={(e: any, name: string) => {
                  onValuesChange(e, name);
                }}
              />
            </div>
            <div className={getMixinStyle('formRow')}>
              <FormLabel>Activity</FormLabel>
              <Field
                name="activity_ids"
                label="Activity"
                multiple={true}
                options={states.activityOptions}
                component={Select}
                onCustomChange={(e: any, name: string) => {
                  onValuesChange(e, name);
                }}
              />
            </div>
            <div className={getMixinStyle('formInformation')}>
              <div><label>Tuition: </label><span>${states.data.tuition}</span></div>
              <div><label>Tuition Discount: </label><span>${states.data.tuition_discount}</span></div>
              <div><label>Tech fee: </label><span>${states.data.tech_fee}</span></div>
              <div><label>Activities fee: </label><span>${states.data.activities_fee}</span></div>
              <div><label>Total fee: </label><span>${states.data.total_fee}</span></div>
            </div>
            <div className={getMixinStyle('formActions')}>
              <Button
                size="small"
                variant="outlined"
                color="primary"
                type="button"
                onClick={() => {
                  navigate('/children', { replace: true });
                }}
                disableElevation>Cancel</Button>
              <Button
                size="small"
                variant="contained"
                color="primary"
                type="submit"
                disableElevation>Submit</Button>
            </div>

          </Form>
        )}
      </Formik>
    </div>
  );
};

export default View;
