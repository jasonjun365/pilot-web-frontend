const rep = new RegExp('\\' + process.env.CUSTOM_BASENAME);

const getPathname = (): string => {
  const result = process.env.CUSTOM_BASENAME === '/' ? window.location.pathname : window.location.pathname.replace(rep, '');
  return result.replace(/\/+/g, '/');
};

export default getPathname;