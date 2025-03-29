
export interface IExcelData {
  sheetData: Array<any>,
  sheetName?: string,
  sheetFilter?: Array<string>,
  sheetHeader?: Array<string>,
  columnWidths?: Array<number>
}

export interface IExcelOption {
  fileName: string,
  datas: Array<IExcelData>
}