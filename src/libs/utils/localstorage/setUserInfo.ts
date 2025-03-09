import {IUserSession} from '@/libs/types/user';

const setUserInfo = (user: IUserSession): any => {
  localStorage.setItem('USER_SESSION_INFO', JSON.stringify(user));
};

export default setUserInfo;