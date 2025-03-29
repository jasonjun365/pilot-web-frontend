import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import {getUserInfo, setUserInfo} from '@/libs/utils/localstorage';
import space from './space';
import {IUserSession, IRole} from '@/libs/types/user';

const userInfo = getUserInfo();

const {
  actions,
  thunks
} = space;

interface PropTypes {
  data: IUserSession | null
  loading: boolean
  isLogin: boolean
  roles: string[]
  signupStatus: boolean
}

const initialState: PropTypes = {
  data: userInfo,
  loading: false,
  isLogin: false,
  roles: ['anonymous'],
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
      if (action.payload?.token) {
        state.data = action.payload;
        state.isLogin = true;
        state.roles = action.payload?.roles ? action.payload.roles.map((item: IRole) => item.roleName) : ['anonymous'];
      } else {
        state.data = null;
        state.isLogin = false;
        state.roles = ['anonymous'];
      }
    })
    .addCase(actions.removeUserSession, (state) => {
      state.data = null;
      state.isLogin = false;
      state.roles = ['anonymous'];
    })
    .addCase(thunks.getData.pending, (state) => {
      state.loading = true;
    })
    .addCase(thunks.getData.fulfilled, (state, action: PayloadAction<any>) => {
      if (action.payload.data) {
        state.data = action.payload.data;
        state.isLogin = true;
        state.roles = action.payload.data?.roles ? action.payload.data.roles.map((item: IRole) => item.roleName) : ['anonymous'];
      }
      state.loading = false;
    })
    .addCase(thunks.getData.rejected, (state) => {
      state.loading = false;
    })
    .addCase(thunks.login.pending, (state) => {
      state.loading = true;
    })
    .addCase(thunks.login.fulfilled, (state, action: PayloadAction<any, any, any>) => {
      if (action.payload.data) {
        setUserInfo(action.payload.data);
        state.data = action.payload.data;
        state.roles = action.payload.data?.roles ? action.payload.data?.roles.map((item: IRole) => item.roleName) : ['anonymous'];
        state.isLogin = true;
      }
      state.loading = false;
    })
    .addCase(thunks.login.rejected, (state) => {
      state.loading = false;
    })
    .addCase(thunks.logout.pending, (state) => {
      state.loading = true;
    })
    .addCase(thunks.logout.fulfilled, (state, action: PayloadAction<any, any, any>) => {
      // TODO do later
      // if (action.payload.data) {
      //   state.data = action.payload.data;
      //   state.isLogin = true;
      //   state.role = action.payload.data.role || 'anonymous';
      //   setUserInfo(action.payload.data);
      // }
      state.loading = false;
    })
    .addCase(thunks.logout.rejected, (state) => {
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
