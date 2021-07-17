import {
  getCurrentUserSuccess,
  gentCurrentUserError,
  userLoginSuccess,
  userLoginError,
  userRegisterSuccess,
  userRegisterError,
  userLogoutSuccess,
  userLogoutError,
  showModal,
  getUpdatedTokenSuccess,
  getUpdatedTokenError,
} from './auth-actions';

import { createReducer, combineReducers } from '@reduxjs/toolkit';

const initialState = { email: null, name: null };

const userReducer = createReducer(initialState, {
  [userRegisterSuccess]: (
    _,
    { payload: { token, refreshToken, ...userData } },
  ) => userData,
  [userLoginSuccess]: (_, { payload: { token, refreshToken, ...userData } }) =>
    userData,
  [getCurrentUserSuccess]: (_, { payload }) => payload,
  [userLogoutSuccess]: (_, __) => initialState,
});

const tokenReducer = createReducer(initialState, {
  [userRegisterSuccess]: (_, { payload }) => payload.token,
  [userLoginSuccess]: (_, { payload }) => payload.token,
  [getUpdatedTokenSuccess]: (_, { payload }) => payload.token,
  [userLogoutSuccess]: () => null,
});

const refreshTokenReducer = createReducer(initialState, {
  [userRegisterSuccess]: (_, { payload }) => payload.refreshToken,
  [userLoginSuccess]: (_, { payload }) => payload.refreshToken,
  [getUpdatedTokenSuccess]: (_, { payload }) => payload.refreshToken,
  [userLogoutSuccess]: () => null,
});

const isAutorizedReducer = createReducer(false, {
  [userRegisterSuccess]: () => true,
  [getCurrentUserSuccess]: () => true,
  [userLoginSuccess]: () => true,
  [userLoginError]: () => false,
  [userLogoutSuccess]: () => false,
  [userRegisterError]: () => false,
  [gentCurrentUserError]: () => false,
});

const setError = (_, { payload }) => payload;

const errorReducers = createReducer(null, {
  [userRegisterError]: setError,
  [userLoginError]: setError,
  [userLogoutError]: setError,
  [gentCurrentUserError]: setError,
  [getUpdatedTokenError]: setError,
});

const showModalReducer = createReducer(false, {
  [showModal]: (_, { payload }) => payload,
});

const authReducers = combineReducers({
  user: userReducer,
  token: tokenReducer,
  refreshToken: refreshTokenReducer,
  isAutorized: isAutorizedReducer,
  errors: errorReducers,
  showModal: showModalReducer,
});

export default authReducers;
