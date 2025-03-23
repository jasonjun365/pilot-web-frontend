export interface IRole {
  id: number,
  userId: string,
  roleId: number,
  username: string,
  roleName: string
}

export interface IUserSession {
  userId: number,
  username: string,
  email: string,
  realName: string,
  photo: string,
  roles: IRole[],
  status: number,
  token: string
}
