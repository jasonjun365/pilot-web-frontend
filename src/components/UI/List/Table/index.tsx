import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { TableContainer, Box } from '@mui/material';
import {ColumnTypes, SearchFormTypes} from './Interface';
import SelectBar from './SelectBar';
import Table from './Table';
import Pagination from './Pagination';
import CircularLoading from '@/components/UI/Loading/Circular';

interface PropTypes { // states
  columns: ColumnTypes[]
  data: any[]
  rowkey?: string | undefined
  loading: boolean
  count: number
  searchForm: SearchFormTypes
  selectProps: any
  searchFormHeight?: string
  extraHeight?: string
  changeToTop?: boolean
  thunkNames: string[]
}

interface PropTypes {
  handleGetData: (v: any) => void
}

const PagesTable: React.FC<PropTypes> = ({ loading, count, searchForm, selectProps, searchFormHeight='51px', extraHeight='0px', thunkNames, changeToTop=true, handleGetData, ...props }) => {
  const { t } = useTranslation();
  
  const selectBarHeight = useRef('48px');

  const timeoutRef = useRef<number>(300);
  const tableRef = useRef<any>(null);
  const [show, setShow] = useState(false);

  const toTop = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
      tableRef.current.scrollTop = 0;
    }, timeoutRef.current);
  };

  useEffect(() => {
    if (changeToTop)
      toTop();
  }, [searchForm]);

  return (
    <CircularLoading
      mask={true}
      loading={loading}
      style={{ height: 'calc(100% - 52px - ' + searchFormHeight + ' + ' + extraHeight + (selectProps.value.length ? ' - ' + selectBarHeight.current : '') + ')' }}
    >
      <SelectBar data={props.data} columns={props.columns} selectProps={selectProps} height={selectBarHeight.current}/>
      <TableContainer
        ref={tableRef}
        sx={{ height: '100%' }}>
        <Table {...props} animationStyle={{
          transition: show ? timeoutRef.current + 'ms ease' : '',
          transform: show ? 'translateY(' + tableRef.current.scrollTop + 'px)' : '',
        }} />
        {!props.data.length && !loading && (
          <Box sx={{ mt: 2, textAlign: 'center' }}>
            {t('table.dataEmpty')}
          </Box>
        )}
      </TableContainer>
      {Boolean(count) && (
        <Pagination count={count} searchForm={searchForm} thunkNames={thunkNames} handleGetData={handleGetData} />
      )}
    </CircularLoading>
  );
};

export default PagesTable;