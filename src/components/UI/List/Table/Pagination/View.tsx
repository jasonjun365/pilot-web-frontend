import React from 'react';
import { useTranslation } from 'react-i18next';
import { TablePagination, Pagination } from '@mui/material';
import { ajaxCancelMap } from '@/store/createAsyncThunks';
import {SearchFormTypes} from '@/components/UI/List/Table/Interface';
import ViewStylePropTypes from '@/libs/types/ViewStyle';

interface PropTypes extends ViewStylePropTypes { // states
  count: number
  searchForm: SearchFormTypes
  thunkNames: string[]
}

interface PropTypes {
  handleGetData: (v: any) => void
}

const View: React.FC<PropTypes> = ({ count, searchForm, thunkNames, handleGetData, getMixinStyle }) => {
  const { t } = useTranslation();

  const handleCancel = (fn: () => void) => {
    thunkNames.forEach((thunkName: string) => {
      ajaxCancelMap[thunkName] && ajaxCancelMap[thunkName]();
    });
    setTimeout(() => {
      fn();
    }, 0);
  };

  const handleChangePage = (_event: unknown, newPage: number) => {
    handleCancel(() => {
      handleGetData({ ...searchForm, page: newPage + 1 });
    });
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleCancel(() => {
      const newSize = event.target.value;
      handleGetData({ ...searchForm, size: newSize, page: 1 });
    });
  };

  const handleChange = (_event: unknown, newPage: number) => {
    handleCancel(() => {
      handleGetData({ ...searchForm, page: newPage });
    });
  };

  return (
    <div className={getMixinStyle('layout')}>
      <TablePagination
        rowsPerPageOptions={[1, 2, 5, 10, 20, 30, 40, 50]}
        component='div'
        count={count}
        rowsPerPage={searchForm.size}
        page={count ? searchForm.page - 1 : 0}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage={t('table.page.rowsPerPage')}
        labelDisplayedRows={({ from, to, count }) => {
          return `${from}-${to} ${t('table.page.of')} ${count}`;
        }}
        backIconButtonProps={{ style: { display: 'none' } }}
        nextIconButtonProps={{ style: { display: 'none' } }}
      />
      <Pagination
        count={Math.ceil(count / searchForm.size)}
        page={searchForm.page}
        onChange={handleChange}
        showFirstButton
        showLastButton
      />
    </div>
  );
};

export default View;