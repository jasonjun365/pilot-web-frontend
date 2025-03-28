import axios from 'axios';
import querystring from 'query-string';
import {getUserInfo} from '@/libs/utils/localstorage';

const baseUrl = process.env.CUSTOM_IS_MOCK === 'yes' ? '' : process.env.CUSTOM_BASE_URL;

interface PropTypes {
  url: string
  method?: 'get' | 'post' | 'delete' | 'put'
  params?: any
  data?: any
  onUploadProgress?: any
  cancelToken?: any
  headers?: any
  extraHeaders?: any
}

export default async ({ url, method='get', params, data, onUploadProgress=null, cancelToken=null, headers, extraHeaders }: PropTypes) => {
  // data?.forEach((value: any, key: any) => {
  //   console.log('key %s: value %s', key, value);
  // });
  const userInfo = getUserInfo();
  const requestConf = {
    url: baseUrl + url, // method === 'get' ? targetUrl + '?' + querystring.stringify(params) : targetUrl,
    method: method,
    params: params,
    data: data,
    onUploadProgress: onUploadProgress,
    headers: {
      'Content-Type': 'application/json',
      'token': userInfo.token,
      ...headers,
      ...extraHeaders
    },
    cancelToken
  };

  console.log('==== RequestConf: ', requestConf);
  return await axios(requestConf);
};