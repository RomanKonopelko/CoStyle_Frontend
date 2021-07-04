import { createAction } from '@reduxjs/toolkit';

const getCurrentUserRequest = createAction('auth/getCurrentUserRequest');
const getCurrentUserSuccess = createAction('auth/getCurrentUserSuccess');
const gentCurrentUserError = createAction('auth/getCurrentUserError');

const userRegisterRequest = createAction('auth/userRegisterRequest');
const userRegisterSuccess = createAction('auth/userRegisterSuccess');
const userRegisterError = createAction('auth/userRegisterError');

const userLoginRequest = createAction('auth/userLoginRequest');
const userLoginSuccess = createAction('auth/userLoginSuccess');
const userLoginError = createAction('auth/userLoginError');

const userLogoutRequest = createAction('auth/userLogoutRequest');
const userLogoutSuccess = createAction('auth/userLogoutSuccess');
const userLogoutError = createAction('auth/userLogoutError');

export {
  getCurrentUserRequest,
  getCurrentUserSuccess,
  gentCurrentUserError,
  userLoginRequest,
  userLoginSuccess,
  userLoginError,
  userRegisterRequest,
  userRegisterSuccess,
  userRegisterError,
  userLogoutRequest,
  userLogoutSuccess,
  userLogoutError,
};
