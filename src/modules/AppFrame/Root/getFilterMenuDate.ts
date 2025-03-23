import menuData, {} from '@/route/menu';

interface PropTypes {
  (roles: string[]): any
}

const getFilterMenuDate: PropTypes = (roles: string[]) => {
  // const filterChannel = Object.keys(channelTypes).reduce((p: any, n: any) => ({
  //   ...p,
  //   [MenuMapPath[n]]: Boolean(channelTypes[n].length)
  // }), {});
  //
  // const hasAnyChannel = Object.values(filterChannel).some((it: any) => it === true);
  //
  // if (hasAnyChannel) {
  //   const otherMenuData = menuData.filter((it: any) => !filterChannel.hasOwnProperty(it.path)).map((it: any) => it.path);
  //   otherMenuData.forEach((it: string) => {
  //     filterChannel[it] = true;
  //   });
  // }
  let menus:any[] = [];
  roles.forEach((role) => {
    menus = [...menus, ...menuData.filter((it: any) => it.roles.includes(role))];
  });
  return menus; // menuData.filter((it: any) => it.roles.includes(role));
};

export default getFilterMenuDate;