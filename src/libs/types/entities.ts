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
  enabled: number
}

export interface IProgram {
  id: number,
  name: string,
  description: string,
  year: number,
  season: string,
  start_date: string,
  end_date: string,
  teacher_id: number,
  number_of_student: number,
  tuition: number,
  tuition_discount: number,
  tech_fee: number,
  create_at: number,
  update_at: number,
}

export interface IActivity {
  id: number,
  name: string,
  description: string,
  year: number,
  season: string,
  start_date: string,
  end_date: string,
  teacher_id: number,
  number_of_student: number,
  fee: number,
  create_at: number,
  update_at: number,
}

export interface ITuition {
  id: number,
  parent_id: number,
  parent: IUser,
  student_id: number,
  student: IStudent,
  program_id: number,
  program: IProgram,
  activities: Array<IActivity>,
  tuition: number,
  tuition_discount: number,
  tech_fee: number,
  activities_fee: number,
  total_fee: number,
  status: 'Cancel' | 'Progress' | 'Done'
  create_at: number,
  update_at: number,
}

export interface IOrder {
  id: number,
  user_id: number,
  tuition_id: number,
  tuition_total_fee: number,
  GST_fee: number,
  total_amount: number,
  payment_id: number | null,
  receipt_url: string | null,
  status: string,
  create_at: number,
  update_at: number,
}