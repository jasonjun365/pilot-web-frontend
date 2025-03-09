import menuData, {} from '@/route/menu'; // MenuMapPath

interface PropTypes {
  (role: string): any
}

const getFilterMenuDate: PropTypes = (role) => {
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

  return menuData.filter((it: any) => it.roles.includes(role));
};

export default getFilterMenuDate;