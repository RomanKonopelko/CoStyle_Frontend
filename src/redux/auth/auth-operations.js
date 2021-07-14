import axios from 'axios';

import { store } from 'react-notifications-component';

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
} from './auth-actions';

const notificationError = {
  title: `Hello Guest!Try again!`,
  type: 'danger',
  container: 'top-right',
  animationIn: ['animate__animated animate__fadeIn'],
  animationOut: ['animate__animated animate__fadeOut'],
  dismiss: {
    duration: 3000,
    onScreen: true,
  },
};

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
    dispatch(gentCurrentUserError(error.message));
  }
};

const registerUser = credentials => async dispatch => {
  dispatch(userRegisterRequest());

  try {
    const { data } = await axios.post('/api/users/register', credentials);
    token.set(data.token);
    dispatch(userRegisterSuccess(data));
  } catch (error) {
    store.addNotification({
      ...notificationError,
      message: error.message,
      title: `Hello ${credentials.name}!Try again!`,
    });
    dispatch(userRegisterError(error.message));
  }
};

const LoginUser = credentials => async dispatch => {
  dispatch(userLoginRequest());

  try {
    const { data } = await axios.post('/api/users/login', credentials);
    token.set(data.payload.token);
    dispatch(userLoginSuccess(data.payload));
  } catch (error) {
    store.addNotification({
      ...notificationError,
      message: error.message,
    });
    dispatch(userLoginError(error.message));
  }

  // const { data } = await axios.get('/api/transactions');

  // console.log(data);
};

const LogoutUser = () => async dispatch => {
  dispatch(userLogoutRequest());

  try {
    await axios.post('/api/users/logout');
    dispatch(userLogoutSuccess());
    token.unset();
  } catch (error) {
    store.addNotification({
      ...notificationError,
      message: error.message,
    });
    dispatch(userLogoutError(error.message));
  }
};

// Will be Operation for REFRESH TOKEN

// const RefreshToken = callbackFunction => async (dispatch, getState) => {
//   const {
//     auth: { token: persistedToken },
//   } = getState();

//   if (!persistedToken) {
//     return;
//   }
//   token.set(persistedToken);
//   dispatch(endRefreshTokenRequest());

//   try {
//     const { data } = await axios.get('');
//     dispatch(sendRefreshTokenSuccess(data.payload));
//   } catch (error) {
//     dispatch(sendRefreshTokenError(error.message));
//   }
// };

export { registerUser, LoginUser, LogoutUser, getCurrentUser };
