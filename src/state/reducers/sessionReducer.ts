import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import {
  updateSession,
  logoutFulfilled,
  loginFulfilled
} from 'state/actions/userActions';

export interface SessionState {
  accessToken?: string;
  authenticated: boolean;
}

const initialState: SessionState = {
  accessToken: undefined,
  authenticated: false
};

const handleLoginFulfilled = (
  state: SessionState,
  { payload }: PayloadAction<string>
) => {
  state.accessToken = payload;
  state.authenticated = true;
};

const handleLogoutFulfilled = () => {
  return initialState;
};

const handleUpdateSession = (
  state: SessionState,
  { payload }: PayloadAction<string>
) => {
  state.accessToken = payload;
};

export default createReducer(initialState, {
  [loginFulfilled.type]: handleLoginFulfilled,
  [logoutFulfilled.type]: handleLogoutFulfilled,
  [updateSession.type]: handleUpdateSession
});
