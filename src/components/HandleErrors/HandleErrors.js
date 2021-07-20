import { OperationsAuth } from '../../redux/auth';

const GetError = errorData => dispatch => {
  const { error, requestedCallback, requestData } = errorData;
  console.log(error);
  console.log(requestData);
  console.log(requestedCallback);
  if (error === 401) {
    requestData
      ? dispatch(OperationsAuth.refreshToken(requestedCallback, requestData))
      : dispatch(OperationsAuth.refreshToken(requestedCallback));

    console.log('Error was caught');
  }
};

export { GetError };
