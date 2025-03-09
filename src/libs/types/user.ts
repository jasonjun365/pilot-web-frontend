export interface IUserSession {
  id: number,
  username: string,
  email: string,
  role: string,
  enabled: boolean,
  token: string
}
