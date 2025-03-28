export interface IOptionType {
  label: string
  value: string | number
  icon?: string
}

export interface ReRegistrationFormType {
  parentId: string | number
  studentId: number
  programId: number
  activityIds: Array<number>
  tuition: number
  tuitionDiscount: number
  techFee: number
  activitiesFee: number
  totalFee: number
}