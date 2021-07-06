import axios from 'axios';
import {
  getTransactionRequest,
  getTransactionSuccess,
  getTransactionError,
  addTransactionRequest,
  addTransactionSuccess,
  addTransactionError,
  // deleteTransactionRequest,
  // deleteTransactionSuccess,
  // deleteTransactionError,
} from './statistics-actions';

axios.defaults.baseURL = 'https://costyle-wallet-app.herokuapp.com/';

const getTransaction = () => async dispatch => {
  dispatch(getTransactionRequest());

  try {
    const { data } = await axios.get('/api/transaction');

    dispatch(getTransactionSuccess(data));
  } catch (error) {
    dispatch(getTransactionError(error.message));
  }
};

const addTransaction = (name, number) => async dispatch => {
  const Transaction = {
    name,
    number,
  };

  dispatch(addTransactionRequest());

  try {
    const { data } = await axios.post('/api/transaction', Transaction);
    dispatch(addTransactionSuccess(data));
  } catch (error) {
    dispatch(addTransactionError(error.message));
  }
};

// const deleteTransaction = id => async dispatch => {
//   dispatch(deleteTransactionRequest());

//   try {
//     await axios.delete(`/transactions/${id}`);
//     dispatch(deleteTransactionSuccess(id));
//   } catch (error) {
//     dispatch(deleteTransactionError(error.message));
//   }
// };

export {
  getTransaction,
  addTransaction,
  // deleteTransaction,
};
