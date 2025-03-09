import MenuPropTypes from './interface/MenuPropTypes';

function tileMenu (data: MenuPropTypes[]) {
  const allPath: string[] = [];
  const pathMatchName: any = {};
  const pathMatchScrollTop: any = {};

  data.forEach((it: MenuPropTypes) => {
    if (it.path) {
      allPath.push(it.path);
      pathMatchName[it.path] = it.name;
      pathMatchScrollTop[it.path] = it.scroll || 0;
    }
  });

  return {
    data,
    allPath,
    pathMatchName,
    pathMatchScrollTop,
  };
}

export default tileMenu;