import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FormControl, FormHelperText } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import axios from 'axios';
import ajax from '@/libs/axios/request';
import store from '@/store';
import {getUserInfo} from '@/libs/utils/localstorage';
import Text from '@/components/UI/Inputs/Text';
import ImageView from '@/components/UI/Photo/ImageView';
import CircularLoading from '@/components/UI/Loading/Circular';
import Crop from '@/components/UI/Photo/Crop';
import ViewStylePropTypes from '@/libs/types/ViewStyle';
import PictureUploadIcon from '@/resource/file/svg/special/PictureUpload';

const uploadBaseUrl = process.env.CUSTOM_MEDIA_UPLOAD;

const userInfo = getUserInfo();

let cancelUpload: any;

interface PropTypes extends ViewStylePropTypes { // states
  control: any
  errors: any
  schema: any
  initialData: any
  name: string
  label: string
  initialURL: '',
  open: boolean
  cropType?: '1:1' | '3:1' | '16:9'
}

interface PropTypes { // methods
  getValues: (v: any) => any
  setValue: (v: any, n: any) => any
  trigger: (v?: any) => any
  afterFn?: (v: any) => any
}

const uploadMethod = async ({ setLoading, setLoadingValue, handleChange, formData, filename }: any) => {
  setLoading(true);
  try {
    const cancelTokenSource = axios.CancelToken.source();
    cancelUpload = cancelTokenSource.cancel;
    const response = await ajax({
      url: uploadBaseUrl + '/media/upload',
      method: 'post',
      params: formData,
      cancelToken: cancelTokenSource.token,
      onUploadProgress: (t: any) => {
        setLoadingValue(Math.floor(100 * (t.loaded / t.total)));
      },
      headers: {
        Authorization: userInfo.token,
        userid: userInfo._id,
        filename,
      }
    });
    cancelUpload = null;
    handleChange(response);
  } catch (err: any) {
    if (err.message)
      store.dispatch({ type: 'basic/toast/addData', payload: { msg: err.message, type: 'error' }});
  } finally {
    setLoading(false);
    setLoadingValue(0);
  }
};

const FormItemUploadImage: React.FC<PropTypes> = ({ control, errors, schema, getValues, setValue, trigger, initialData, name, open, cropType, label, initialURL, afterFn, getMixinStyle }) => {
  const { t } = useTranslation();
  const [loading, setLoading ] = React.useState<boolean>(false);
  const [loadingValue, setLoadingValue ] = React.useState<number>(0);
  const data = getValues(name) || '';
  const fontSize = 40;
  const loadingSize = 46;
  
  const handleChange = (result: any) => {
    const newData = result.data.ori;
    setValue(name, newData);
    setTimeout(() => trigger(name), 0);
    afterFn && afterFn(newData);
  };

  const handleDelete = () => {
    setValue(name, initialURL);
    setTimeout(() => trigger(name), 0);
  };

  useEffect(() => { if (cancelUpload) cancelUpload(); }, [open]);

  return (
    <FormControl error={Boolean(errors[name])}>
      <div className={getMixinStyle('layout')}>
        <div className={getMixinStyle('imageBox')}>
          {data && (
            <>
              <CircularLoading loading={loading} size={fontSize}>
                <ImageView src={data} alt={label} loadingDivStyle={{ width: 100, height: 70 }} />
              </CircularLoading>
              <div className={getMixinStyle('imgLabel')}>
                <span>{t('tips.thumbnailPreview')}</span>
              </div>
              {initialURL && initialURL !== data && (
                <CancelIcon className={getMixinStyle('delete')} onClick={handleDelete} />
              )}
            </>
          )}
        </div>
        <div className={getMixinStyle('uploadBox')}>
          <CircularLoading loading={loading} value={loadingValue} size={loadingSize} mask={true}>
            <CircularLoading loading={loading} size={fontSize}>
              <div className={getMixinStyle('btn', errors[name] ? ['error'] : [])}>
                <Crop name={name} type={cropType} confirmFn={(file: any) => {
                  const formData = new FormData();
                  formData.append('file', file);
                  uploadMethod({ setLoading, setLoadingValue, handleChange, formData, filename: file.name });
                }}>
                  <div className={getMixinStyle('addBtn')}>
                    <PictureUploadIcon />
                    <div className={getMixinStyle('label')}>{t('tips.uploadPicture')}</div>
                  </div>
                </Crop>
              </div>
            </CircularLoading>
          </CircularLoading>
          {errors[name]?.message && (
            <FormHelperText>{errors[name]?.message}</FormHelperText>
          )}
          <div style={{ display: 'none' }}>
            <Text {...{ control, errors, schema, getValues, setValue, trigger, initialData, name }} />
          </div>
        </div>
      </div>
    </FormControl>
  );
};

export default FormItemUploadImage;
