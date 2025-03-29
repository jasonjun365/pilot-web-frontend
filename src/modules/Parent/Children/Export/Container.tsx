import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Actions from '@/store/actions';
import exportExcel from '@/libs/utils/export/exportExcel';
import {IExcelOption} from '@/libs/utils/export/type';
import {unwrapResult} from '@reduxjs/toolkit';
import html2PDF from 'jspdf-html2canvas';

const {
  actions: thisActions,
  thunks: thisThunks,
} = Actions.parent.children.exportData;

interface PropTypes {
  Index: React.FC<any>
}

const Container: React.FC<PropTypes> = ({Index}) => {
  const dispatch = useDispatch();
  const thisState = useSelector((state: any) => state.parent.children.exportData);
  const tableState = useSelector((state: any) => state.parent.children.table);

  const states = {
    loading: thisState.loading,
  };

  const methods = {
    handleExportPDF: () => {
      const tableContainer = document.getElementById(tableState.containerId);
      if (tableContainer) {
        html2PDF(tableContainer, {
          jsPDF: {
            format: 'a4',
            orientation: 'l',
          },
          imageType: 'image/jpeg',
          output: 'Students.pdf'
        });
      }
    },
    handleExportExcel: () => {
      const option: IExcelOption = {
        fileName: 'Students',
        datas: [
          {
            sheetData: [],
            sheetName: 'Students',
            sheetFilter: ['id', 'name', 'email', 'address', 'parentName', 'parentEmail'],
            sheetHeader: ['ID', 'Student Name', 'Student Email', 'Address', 'Parent Name', 'Parent Email'],
            columnWidths: [5, 10, 15, 15, 10, 15],
          },
        ]
      };

      // Get My all students
      dispatch(thisThunks.getExportData({params: thisState.initialSearchForm})).then(unwrapResult).then((response: any) => {
        if (response.code === 0 && response?.data?.records) {
          option.datas[0].sheetData = response.data.records;
          exportExcel(option);
        }
      });
    }
  };

  return (
    <Index
      {...states}
      {...methods}
    />
  );
};

export default Container;