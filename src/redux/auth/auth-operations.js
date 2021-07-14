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
} from './auth-actions';

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
    dispatch(userRegisterError(error.message));
    Notify(error.response.data.message, credentials.name);
  }
};

const LoginUser = credentials => async dispatch => {
  dispatch(userLoginRequest());

  try {
    const { data } = await axios.post('/api/users/login', credentials);
    token.set(data.payload.token);
    dispatch(userLoginSuccess(data.payload));
  } catch (error) {
    console.log(credentials, 'name');
    dispatch(userLoginError(error.message));
    Notify(error.response.data.message);
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
    dispatch(userLogoutError(error.message));
    Notify(error.response.data.message);
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
