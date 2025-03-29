const ExportJsonExcel = require('js-export-excel');
import {IExcelOption} from '@/libs/utils/export/type';

const exportExcel = (option: IExcelOption): any => {
  const toExcel = new ExportJsonExcel(option);
  toExcel.saveExcel();
};

export default exportExcel;