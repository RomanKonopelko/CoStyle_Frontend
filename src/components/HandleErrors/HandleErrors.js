import { OperationsAuth } from '../../redux/auth';

const GetError = errorData => dispatch => {
  const { error, requestCallback, requestData } = errorData;
  console.log(error);
  if (error === 401) {
    dispatch(OperationsAuth.RefreshToken(requestCallback));
    console.log('Error was caught');
  }
};

export { GetError };
