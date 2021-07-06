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
} from './auth-actions';

import { createReducer, combineReducers } from '@reduxjs/toolkit';

const initialState = { email: null, name: null };

const userReducer = createReducer(initialState, {
  [userRegisterSuccess]: (_, { payload }) => payload.user,
  [userLoginSuccess]: (_, { payload }) => payload.user,
  [getCurrentUserSuccess]: (_, { payload }) => payload,
  [userLogoutSuccess]: (_, __) => initialState,
});

const tokenReducer = createReducer(initialState, {
  [userRegisterSuccess]: (_, { payload }) => payload.token,
  [userLoginSuccess]: (_, { payload }) => payload.token,
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
});

const showModalReducer = createReducer(false, {
  [showModal]: (_, { payload }) => payload,
});

const authReducers = combineReducers({
  user: userReducer,
  token: tokenReducer,
  isAutorized: isAutorizedReducer,
  errors: errorReducers,
  showModal: showModalReducer,
});

export default authReducers;
