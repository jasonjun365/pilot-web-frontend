import React from 'react';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { ajaxCancelMap } from '@/store/createAsyncThunks';

interface PropTypes { // states
  initialData: any
  data: any
  loading: boolean
  thunkNames: string[]
}

interface PropTypes { // methods
  hookSubmit: (v?: any, n?: any) => any
  setValue: (v: any, n: any) => any
  handleGetData: (v: any) => void
}

const Btns: React.FC<PropTypes> = ({ data: searchForm, thunkNames, hookSubmit, handleGetData }) => {
  const onSubmit = async (data: any) => {
    thunkNames.forEach((thunkName: string) => {
      ajaxCancelMap[thunkName] && ajaxCancelMap[thunkName]();
    });
    const formData = { ...searchForm, ...data, page: 1, size: searchForm.size };
    handleGetData(formData);
  };
  
  return (
    <div style={{ display: 'none' }}>
      <IconButton color='primary' type='submit' size='small' onClick={hookSubmit(onSubmit)}>
        <SearchIcon fontSize='small' />
      </IconButton>
    </div>
  );
};

export default Btns;
