import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import {getUserInfo, setUserInfo} from '@/libs/utils/localstorage';
import space from './space';
import {IUserSession} from '@/libs/types/user';

const userInfo = getUserInfo();

const {
  actions,
  thunks
} = space;

interface PropTypes {
  data: IUserSession | null
  loading: boolean
  isLogin: boolean
  role: string
  signupStatus: boolean
}

const initialState: PropTypes = {
  data: userInfo,
  loading: false,
  isLogin: false,
  role: 'anonymous',
  signupStatus: false,
};
// removeUserSession
const data = createReducer(
  initialState,
  builder => { builder
    .addCase(actions.setLoading, (state, action: PayloadAction<any>) => {
      state.loading = action.payload;
    })
    .addCase(actions.checkUserSession, (state, action: PayloadAction<any>) => {
      console.log('checkUserSession:', action.payload);
      if (action.payload?.token) {
        state.data = action.payload;
        state.isLogin = true;
        state.role = action.payload.role || 'anonymous';
      } else {
        state.data = null;
        state.isLogin = false;
        state.role = 'anonymous';
      }
    })
    .addCase(actions.removeUserSession, (state) => {
      console.log('removeUserSession:');
      state.data = null;
      state.isLogin = false;
      state.role = 'anonymous';
    })
    .addCase(thunks.getData.pending, (state) => {
      state.loading = true;
    })
    .addCase(thunks.getData.fulfilled, (state, action: PayloadAction<any>) => {
      console.log(action.payload.data);
      if (action.payload.data) {
        state.data = action.payload.data;
        state.isLogin = true;
        state.role = action.payload.data.role || 'anonymous';
      }
      state.loading = false;
    })
    .addCase(thunks.getData.rejected, (state) => {
      state.loading = false;
    })
    .addCase(thunks.signin.pending, (state) => {
      state.loading = true;
    })
    .addCase(thunks.signin.fulfilled, (state, action: PayloadAction<any, any, any>) => {
      if (action.payload.data) {
        state.data = action.payload.data;
        state.isLogin = true;
        state.role = action.payload.data.role || 'anonymous';
        setUserInfo(action.payload.data);
      }
      state.loading = false;
    })
    .addCase(thunks.signin.rejected, (state) => {
      state.loading = false;
    })
    .addCase(thunks.signup.pending, (state) => {
      state.loading = true;
    })
    .addCase(thunks.signup.fulfilled, (state, action: PayloadAction<any, any, any>) => {
      state.signupStatus = true;
      state.loading = false;
    })
    .addCase(thunks.signup.rejected, (state) => {
      state.loading = false;
    });
  }
);

export default data;
