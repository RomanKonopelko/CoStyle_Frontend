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
  getTransactionsStatisticRequest,
  getTransactionsStatisticSuccess,
  getTransactionsStatisticError,
} from './transactions-actions';

axios.defaults.baseURL = 'https://costyle-wallet-app.herokuapp.com/';

const getTransaction = () => async dispatch => {
  dispatch(getTransactionsRequest());

  try {
    const { data } = await axios.get('/api/transactions');
    // console.log(`data`, data);
    dispatch(getTransactionsSuccess(data));
  } catch (error) {
    dispatch(getTransactionsError(error.message));
  }
};

const addTransaction = Transaction => async dispatch => {
  // const Transaction = {
  //   name,
  //   number,
  // };
  console.log(Transaction);
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

const getTransactionsStatistic = () => async dispatch => {
  dispatch(getTransactionsStatisticRequest());

  try {
    const { data } = await axios.get('/api/transactions/statistic');
    dispatch(getTransactionsStatisticSuccess(data));
  } catch (error) {
    dispatch(getTransactionsStatisticError(error.message));
  }
};

export {
  getTransaction,
  addTransaction,
  // deleteTransaction,
  getTransactionsStatistic,
};
