export interface IOptionType {
  label: string
  value: string
  icon?: string
}

export interface ReRegistrationFormType {
  parent_id: number
  student_id: number
  program_id: number
  activity_ids: Array<number>
  tuition: number
  tuition_discount: number
  tech_fee: number
  activities_fee: number
  total_fee: number
}