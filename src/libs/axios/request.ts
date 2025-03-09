import axios from 'axios';
import querystring from 'query-string';
import {getUserInfo} from '@/libs/utils/localstorage';

const userInfo = getUserInfo();
const isMock = process.env.CUSTOM_IS_MOCK;
const baseUrl = process.env.CUSTOM_BASE_URL;

interface PropTypes {
  url: string
  method?: 'get' | 'post' | 'delete' | 'put'
  params?: any
  onUploadProgress?: any
  cancelToken?: any
  headers?: any
  extraHeaders?: any
  isJson?: boolean
}

export default async ({ url, params, method='get', isJson=true, onUploadProgress=null, cancelToken=null, headers, extraHeaders }: PropTypes) => {
  const sendJson = isJson && method !== 'get';
  const targetUrl = isMock === 'yes' ? url : baseUrl + url;
  const data = sendJson ? params : querystring.stringify(params);

  console.log('isMock: ', isMock);
  console.log('url: ', targetUrl + (!sendJson && data ? '?' + data : ''));
  return await axios({
    url: targetUrl + (!sendJson && data ? '?' + data : ''),
    method: method,
    data: sendJson && data,
    onUploadProgress: onUploadProgress,
    headers: headers || {
      ...extraHeaders,
      'x-app-auth': JSON.stringify({
        uid: userInfo._id,
        token: userInfo.token,
      }),
    },
    cancelToken,
  });
};