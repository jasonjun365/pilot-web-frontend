import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Button } from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import CircularLoading from '@/components/UI/Loading/Circular';
import Select2 from '@/components/UI/Form/Select2';
import ViewStylePropTypes from '@/libs/types/ViewStyle';
import {IOptionType} from '@/libs/types/Form';
import Actions from '@/store/actions';

const {
  actions: thisActions,
  thunks: thisThunks,
} = Actions.parent.reRegistration;

interface PropTypes extends ViewStylePropTypes {
  studentId: string | number
  formData: any
  loading: boolean
  studentOptions: Array<IOptionType>
  programOptions: Array<IOptionType>
  activityOptions: Array<IOptionType>
  handleSubmit: (values: any) => void
  handleCancel?: () => void
}

const View: React.FC<PropTypes> = ({studentId, formData, loading, handleSubmit, handleCancel, getMixinStyle, ...props}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const schema = yup.object({
    studentId: yup.number().required(t('Missing required field')),
    programId: yup.number().required(t('Missing required field')),
  });
  const {
    control,
    handleSubmit: hookSubmit,
    reset,
    getValues,
    setValue,
    trigger,
    formState: { errors },
    register
  } = useForm<any>({ resolver: yupResolver(schema) });
  const formProps = { errors, hookSubmit, reset, trigger };
  const itemProps = { control, errors, schema, getValues, setValue, trigger, initialData: formData };
  const isError = Object.keys(errors).length > 0;

  const handleProgramChange = (e:any) => {
    const { target: { value } } = e;
    dispatch(thisActions.setFormData({
      programId: value,
    }));
  };

  const handleActivityChange = (e:any) => {
    const { target: { value } } = e;
    dispatch(thisActions.setFormData({
      activityIds: value,
    }));
  };

  return (
    <div className={getMixinStyle('layout')}>
      <form>
        <CircularLoading mask={true} loading={loading}>
          <div className={getMixinStyle('formRow')}>
            <Select2
              {...itemProps}
              label="Student"
              placeholder="Please select student."
              name='studentId'
              variant="outlined"
              fullWidth
              autoFocus={false}
              defaultValue={studentId}
              data={props.studentOptions}
            />
          </div>
          <div className={getMixinStyle('formRow')}>
            <Select2
              {...itemProps}
              label="Program"
              placeholder="Please select program."
              name='programId'
              variant="outlined"
              fullWidth
              autoFocus={false}
              defaultValue=""
              data={props.programOptions}
              onChange={handleProgramChange}
            />
          </div>
          <div className={getMixinStyle('formRow')}>
            <Select2
              {...itemProps}
              label="Activity"
              placeholder="Please select program."
              name='activityIds'
              variant="outlined"
              fullWidth
              autoFocus={false}
              multiple={true}
              defaultValue=""
              data={props.activityOptions}
              onChange={handleActivityChange}
            />
          </div>
          <div className={getMixinStyle('formInformation')}>
            <div><label>Tuition: </label><span>${formData.tuition}</span></div>
            <div><label>Tuition Discount: </label><span>${formData.tuitionDiscount}</span></div>
            <div><label>Tech fee: </label><span>${formData.techFee}</span></div>
            <div><label>Activities fee: </label><span>${formData.activitiesFee}</span></div>
            <div><label>Total fee: </label><span>${formData.totalFee}</span></div>
          </div>
          <div className={getMixinStyle('formActions')}>
            <Button
              size="small"
              variant="outlined"
              color="primary"
              type="button"
              onClick={() => {
                if (handleCancel) {
                  handleCancel();
                }
              }}
              disableElevation>Cancel</Button>
            <Button
              size="small"
              variant="contained"
              color="primary"
              type="submit"
              onClick={hookSubmit(handleSubmit)}
              disableElevation>Submit</Button>
          </div>
        </CircularLoading>
      </form>
    </div>
  );
};

export default View;
