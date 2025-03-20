import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import store from '@/store';
import request from '@/libs/axios/request';

const ajaxCancelMap: any = {};

export { ajaxCancelMap };

interface AjaxParams {
  url: string | ((v: any) => string)
  method?: 'get' | 'post' | 'delete' | 'put'
  isJson?: boolean
  params?: any
}

interface PropTypes {
  (name: string, thunks: [string, AjaxParams][]): any
}

const createAsyncThunks: PropTypes = (name, thunks) => {
  return thunks.reduce((p, n) => ({ ...p,
    [n[0]]: createAsyncThunk(
      name + n[0],
      async (params: any, { rejectWithValue }) => {
        let combineParams = {
          ...n[1].params,
          ...params?.params,
        };

        try {
          const cancelTokenSource = axios.CancelToken.source();

          ajaxCancelMap[name + n[0]] = cancelTokenSource.cancel;

          const response: any = await request({
            // @ts-ignore
            url: n[1].url.constructor === Function && params.urlParams ? n[1].url(params.urlParams) : n[1].url,
            method: n[1].method,
            isJson: n[1].isJson,
            params: Object.keys(combineParams).length && combineParams,
            cancelToken: cancelTokenSource.token,
          });

          console.log('response', response);
          if (params?.localParams) {
            response.localParams = params.localParams;
          }

          delete ajaxCancelMap[name + n[0]];

          const code = response.data.code;

          if (code !== 0) {
            if (code === 401) {
              window.location.href = '/';
            } else {
              const title = 'code: ' + code;
              const msg = response.data.msg || 'unknown error';
              store.dispatch({ type: 'basic/toast/addData', payload: { title, msg, type: 'error', time: 0 }});
              return rejectWithValue(response.data);
            }
          }

          if (response.data.msg) {
            const msg = response.data.msg;
            store.dispatch({ type: 'basic/toast/addData', payload: { msg, type: 'info' }});
          }
          console.log('response.data', response.data);
          return response.data;
        } catch (err: any) {
          console.log('err', err);
          if (err.response.data.error?.code === 'E_USER_NOTFOUND') {
            window.location.href = '/';
          } else {
            const title = err.response.status + ': ' + err.response.data.error?.code;
            const msg = err.response.data.error?.emsg;
            store.dispatch({ type: 'basic/toast/addData', payload: { title, msg, type: 'warning', time: 0 }});
            return rejectWithValue(err.response.data);
          }
        }
      }
    )
  }), {});
};

export default createAsyncThunks;