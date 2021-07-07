import axios from 'axios';
import {
  getTransactionsRequest,
  getTransactionsSuccess,
  getTransactionsError,
  addTransactionRequest,
  addTransactionSuccess,
  addTransactionError,
  // deleteTransactionRequest,
  // deleteTransactionSuccess,
  // deleteTransactionError,
} from './transactions-actions';

axios.defaults.baseURL = 'https://costyle-wallet-app.herokuapp.com/';

const getTransaction = () => async dispatch => {
  dispatch(getTransactionsRequest());

  try {
    const { data } = await axios.get('/api/transactions');
    console.log(data);
    dispatch(getTransactionsSuccess(data));
  } catch (error) {
    dispatch(getTransactionsError(error.message));
  }
};

const addTransaction = (name, number) => async dispatch => {
  const Transaction = {
    name,
    number,
  };

  dispatch(addTransactionRequest());

  try {
    const { data } = await axios.post('/api/transactions', Transaction);
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
