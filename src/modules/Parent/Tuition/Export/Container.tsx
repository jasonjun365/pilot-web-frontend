import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Actions from '@/store/actions';
import {IExcelOption} from '@/libs/utils/export/type';
import {unwrapResult} from '@reduxjs/toolkit';
import {IActivity, ITuition} from '@/libs/types/entities';
import exportExcel from '@/libs/utils/export/exportExcel';
import html2PDF from 'jspdf-html2canvas';

const {
  actions: thisActions,
  thunks: thisThunks,
} = Actions.parent.tuition;

interface PropTypes {
  View: React.FC<any>
}

const Container: React.FC<PropTypes> = ({View}) => {
  const dispatch = useDispatch();
  const userState = useSelector((state: any) => state.basic.user);
  const thisState = useSelector((state: any) => state.parent.tuition);

  const states = {

  };

  const methods = {
    handleExportPDF: () => {
      const tableContainer = document.getElementById(thisState.containerId);
      if (tableContainer) {
        html2PDF(tableContainer, {
          jsPDF: {
            format: 'a4',
            orientation: 'l',
          },
          imageType: 'image/jpeg',
          output: 'Tuition.pdf'
        });
      }
    },
    handleExportExcel: () => {
      const option: IExcelOption = {
        fileName: 'MyTuition',
        datas: [
          {
            sheetData: [],
            sheetName: 'MyTuition',
            sheetFilter: ['studentName', 'parentName', 'programName', 'activityName', 'tuition', 'tuitionDiscount', 'techFee', 'activitiesFee', 'totalFee', 'dataStatus'],
            sheetHeader: ['Student Name', 'Parent Name', 'Program Name', 'Activity Name', 'Tuition', 'Tuition Discount', 'Tech Fee', 'Activities Fee', 'Total Fee', 'Status'],
            columnWidths: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
          },
        ]
      };

      // Get My all tuition
      dispatch(thisThunks.getExportData({params: {parentId: userState.data.userId}})).then(unwrapResult).then((response: any) => {
        if (response.code === 0 && response?.data?.records) {
          option.datas[0].sheetData = response.data.records.map((item: ITuition) => {
            return {
              studentName: item.student?.name,
              parentName: item.parent?.username,
              programName: item.program?.name,
              activityName: item.activities?.map((activity: IActivity) => activity.name).join(' | '),
              tuition: item.tuition,
              tuitionDiscount: item.tuitionDiscount,
              techFee: item.techFee,
              activitiesFee: item.activitiesFee,
              totalFee: item.totalFee,
              dataStatus: item.dataStatus,
            };
          });
          exportExcel(option);
        }
      });
    }
  };

  return (
    <View
      {...states}
      {...methods}
    />
  );
};

export default Container;