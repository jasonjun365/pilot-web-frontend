const getUserInfo = (): any => {
  let data: any = localStorage.getItem('USER_SESSION_INFO');
  data = data ? JSON.parse(data) : {};
  return data;
};

export default getUserInfo;