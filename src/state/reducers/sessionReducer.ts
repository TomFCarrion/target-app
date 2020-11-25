import { ActionReducerMapBuilder, createReducer, PayloadAction } from '@reduxjs/toolkit';
import { login, signUp, logout, updateSession } from 'state/actions/userActions';
import User from 'types/user.entity';

export interface SessionState {
  authenticated: boolean;
  user?: User;
}

const initialState: SessionState = {
  authenticated: false,
  user: undefined,
};

const actionHandlers = (builder: ActionReducerMapBuilder<SessionState>) => {
  builder
    .addCase(login.fulfilled, (state: SessionState, { payload }: PayloadAction<User>) => {
      state.user = payload;
      state.authenticated = true;
    })
    .addCase(signUp.fulfilled, (state: SessionState, { payload }: PayloadAction<User>) => {
      state.user = payload;
    })
    .addCase(updateSession, (state: SessionState) => {
      state.authenticated = true;
    })
    .addCase(logout.fulfilled, () => initialState)
};

export default createReducer<SessionState>(initialState, actionHandlers);
