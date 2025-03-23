const menuData = [{
  icon: 'Profile',
  name: 'home',
  path: '/',
  show: false,
  roles: ['Administrator', 'Teacher', 'Parent', 'anonymous'],
}, {
  icon: 'Profile',
  name: 'signin',
  path: '/signin',
  show: true,
  roles: ['anonymous']
}, {
  icon: 'Profile',
  name: 'signup',
  path: '/signup',
  show: true,
  roles: ['anonymous']
}, {
  icon: 'Profile',
  name: 'manageUser',
  path: '/manage/user',
  show: true,
  roles: ['Administrator']
}, {
  icon: 'Profile',
  name: 'children',
  path: '/children',
  show: true,
  roles: ['Parent']
}, {
  icon: 'Profile',
  name: 'reRegistration',
  path: '/re-registration',
  show: false,
  roles: ['Parent']
}, {
  icon: 'Profile',
  name: 'order',
  path: '/order',
  show: false,
  roles: ['Parent']
}, {
  icon: 'Profile',
  name: 'withdrawal',
  path: '/withdrawal',
  show: false,
  roles: ['Parent']
}, {
  icon: 'Profile',
  name: 'payment',
  path: '/payment',
  show: false,
  roles: ['Parent']
}, {
  icon: 'NavSettings',
  name: 'tuition',
  path: '/tuition',
  show: true,
  roles: ['Parent']
}];

export default menuData;

// export const NavMenus = menuData.reduce((target: any, _key, index) => {
//   target[menuData[index].name] = menuData[index];
//   return target;
// }, {});

// export const MenuMapPath: any = {
//   home: NavMenus.home.path,
//   signin: NavMenus.login.path,
//   signup: NavMenus.signup.path,
//   manage: NavMenus.manage.path,
// };
