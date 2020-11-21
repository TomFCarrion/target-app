import { createAsyncThunk, createAction } from '@reduxjs/toolkit';

import userService from 'services/userService';
import User from 'types/user.entity';

export const login = createAsyncThunk('user/login', async (user: User) => {
  try {
    const {
      data: { data }
    } = await userService.login(user);
    return data;
  } catch ({ response: { data } }) {
    throw data;
  }
});

export const logout = createAsyncThunk('user/logout', async () => {
  try {
    await userService.logout();
  } catch ({ response: { data } }) {
    throw data;
  }
});

export const signUp = createAsyncThunk('user/signUp', async (user: User) => {
  try {
    const { data } = await userService.signUp(user);
    return data;
  } catch ({ response: { data } }) {
    throw data;
  }
});

export const updateSession = createAction<object | undefined>('session/update');
