const menuData = [{
  icon: 'Profile',
  name: 'home',
  path: '/',
  show: false,
  roles: ['administrator', 'teacher', 'parent', 'anonymous'],
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
  name: 'manage',
  path: '/manage',
  show: true,
  roles: ['administrator', 'teacher']
}, {
  icon: 'Profile',
  name: 'children',
  path: '/children',
  show: true,
  roles: ['parent']
}, {
  icon: 'Profile',
  name: 'reRegistration',
  path: '/re-registration',
  show: false,
  roles: ['parent']
}, {
  icon: 'Profile',
  name: 'order',
  path: '/order',
  show: false,
  roles: ['parent']
}, {
  icon: 'Profile',
  name: 'withdrawal',
  path: '/withdrawal',
  show: false,
  roles: ['parent']
}, {
  icon: 'Profile',
  name: 'payment',
  path: '/payment',
  show: false,
  roles: ['parent']
}, {
  icon: 'NavSettings',
  name: 'tuition',
  path: '/tuition',
  show: true,
  roles: ['parent']
}];

export default menuData;

// export const NavMenus = menuData.reduce((target: any, _key, index) => {
//   target[menuData[index].name] = menuData[index];
//   return target;
// }, {});

// export const MenuMapPath: any = {
//   home: NavMenus.home.path,
//   signin: NavMenus.signin.path,
//   signup: NavMenus.signup.path,
//   manage: NavMenus.manage.path,
// };
