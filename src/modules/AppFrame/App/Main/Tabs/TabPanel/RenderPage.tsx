import React from 'react';
import pages from '@/route/AppRoute';
import PageNoPermission from './err/PageNoPermission';
import PageEmpty from './err/PageEmpty';
import Page404 from './err/Page404';
import {URLPattern} from 'urlpattern-polyfill';

const getSpecialPage = (allPath: string[], value: string) => {
  let params: any;
  let hasPage = false;
  let SpecialPage: any;
  allPath.forEach((path) => {
    // @ts-ignore
    const pattern = new URLPattern({ pathname: path });
    const result = pattern.exec({ pathname: value });

    if (result) {
      // if matched path
      hasPage = true;
      // @ts-ignore
      SpecialPage = pages[path];
      if (path.includes('/:')) {
        params = result.pathname.groups;
      }
      return;
    }
  });

  return {hasPage, SpecialPage, params};
};

interface PropTypes { // states
  allPath: string[]
  value: string
}

const RenderPage: React.FC<PropTypes> = ({ allPath, value }) => {
  const {hasPage, SpecialPage, params} = getSpecialPage(allPath, value);

  if (SpecialPage) {
    if (hasPage)
      if (params)
        return <SpecialPage urlParams={params} />;
      else
        return <SpecialPage />;
    else
      return <PageNoPermission value={value} />;
  } else {
    if (hasPage)
      return <PageEmpty value={value} />;
    else
      return <Page404 value={value} />;
  }
};

export default RenderPage;
