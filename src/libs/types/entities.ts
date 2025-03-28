import {IRole} from '@/libs/types/user';

export interface IUser {
  userId: string,
  username: string,
  email: string,
  password: string,
  roleIdList: number[],
  status: number,
}

export interface IStudent {
  id: number,
  name: string,
  email: string,
  address: string,
  parentName: string,
  parentEmail: string,
  primaryParentId: string,
  secondaryParentId?: string,
  enabled: number,
  createAt?: number,
  updateAt?: number,
}

export interface IProgram {
  id: number,
  name: string,
  description: string,
  year: number,
  season: string,
  startDate: string,
  endDate: string,
  teacherId: number,
  numberOfStudent: number,
  tuition: number,
  tuitionDiscount: number,
  techFee: number,
  createAt?: number,
  updateAt?: number,
}

export interface IActivity {
  id: number,
  name: string,
  description: string,
  year: number,
  season: string,
  startDate: string,
  endDate: string,
  teacherId: number,
  numberOfStudent: number,
  fee: number,
  createAt?: number,
  updateAt?: number,
}

export interface ITuition {
  id: string,
  parentId: string,
  parent?: IUser,
  studentId: number,
  student?: IStudent,
  programId: number,
  program?: IProgram,
  activityIds: Array<number>
  activities?: Array<IActivity>,
  tuition: number,
  tuitionDiscount: number,
  techFee: number,
  activitiesFee: number,
  totalFee: number,
  dataStatus: 'Cancel' | 'Progress' | 'Done',
  order?: IOrder,
  createAt?: any,
  updateAt?: any,
}

export interface IOrder {
  id: string,
  userId: string,
  tuitionId: string,
  tuitionTotalFee: number,
  gstFee: number,
  totalAmount: number,
  paymentId: number | null,
  receiptUrl: string | null,
  dataStatus: 'Cancel' | 'Progress' | 'Done',
  tuition?: ITuition,
  createAt: any,
  updateAt: any,
}