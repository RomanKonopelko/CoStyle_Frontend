import axios from 'axios';
import Notify from '../../components/Notify/Notify';

import {
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
  getUpdatedTokenRqueest,
  getUpdatedTokenSuccess,
  getUpdatedTokenError,
} from './auth-actions';

import { GetError } from '../../components/HandleErrors/HandleErrors';

axios.defaults.baseURL = 'https://costyle-wallet-app.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  dispatch(getCurrentUserRequest());

  try {
    const { data } = await axios.get('/api/users/current');
    dispatch(getCurrentUserSuccess(data.payload));
  } catch (error) {
    console.log('ERRORE', error.response.data.code);
    dispatch(
      GetError({
        error: error.response.data.code,
        requestedCallback: getCurrentUser,
      }),
    );
    dispatch(gentCurrentUserError(error.message));
  }
};

const registerUser = credentials => async dispatch => {
  dispatch(userRegisterRequest());

  try {
    const { data } = await axios.post('/api/users/register', credentials);
    token.set(data.payload.token);
    dispatch(userRegisterSuccess(data.payload));
  } catch (error) {
    dispatch(userRegisterError(error.message));
    Notify(error.response.data.message, credentials.name);
  }
};

const loginUser = credentials => async dispatch => {
  dispatch(userLoginRequest());

  try {
    const { data } = await axios.post('/api/users/login', credentials);
    token.set(data.payload.token);
    dispatch(userLoginSuccess(data.payload));
  } catch (error) {
    dispatch(userLoginError(error.message));
    Notify(error.response.data.message);
  }
};

const logoutUser = () => async dispatch => {
  dispatch(userLogoutRequest());

  try {
    await axios.post('/api/users/logout');
    dispatch(userLogoutSuccess());
    token.unset();
  } catch (error) {
    dispatch(
      GetError({
        error: error.response.data.code,
        requestedCallback: logoutUser,
      }),
    );
    console.log(error.message);
    console.log(error.response.data.code);
    dispatch(userLogoutError(error.message));
    // Notify(error.response.data.message);
  }
};

// Will be Operation for REFRESH TOKEN

const refreshToken = (callbackFunction, requestData) => async (
  dispatch,
  getState,
) => {
  const {
    auth: { refreshToken: refresh },
  } = getState();

  if (!refresh) {
    return;
  }
  token.set(refresh);
  dispatch(getUpdatedTokenRqueest());

  try {
    const { data } = await axios.get('/api/users/token');
    dispatch(getUpdatedTokenSuccess(data.payload));
    token.set(data.payload.token);
    console.log(callbackFunction);
    console.log('REQUESTED DATA', requestData);
    requestData
      ? dispatch(callbackFunction(requestData))
      : dispatch(callbackFunction());
  } catch (error) {
    dispatch(getUpdatedTokenError(error.message));
    token.unset();
  }
};

export { registerUser, loginUser, logoutUser, getCurrentUser, refreshToken };
