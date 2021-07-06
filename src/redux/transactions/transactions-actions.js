import { createAction } from '@reduxjs/toolkit';

// ========ToolKit =======
const getTransactionsRequest = createAction(
  'transaction/getTransactionsRequest',
);
const getTransactionsSuccess = createAction(
  'transaction/getTransactionsSuccess',
);
const getTransactionsError = createAction('transaction/getTransactionsError');

const addTransactionRequest = createAction(
  'transactions/addTransactionRequest',
);
const addTransactionSuccess = createAction(
  'transactions/addTransactionSuccess',
);
const addTransactionError = createAction('transactions/addTransactionError');

// const deleteTransactionRequest = createAction('transactions/deleteTransactionRequest');
// const deleteTransactionSuccess = createAction('transactions/deleteTransactionSuccess');
// const deleteTransactionError = createAction('transactions/deleteTransactionError');

// const filterTransactions = createAction('contact/filter');

export {
  getTransactionsRequest,
  getTransactionsSuccess,
  getTransactionsError,
  addTransactionRequest,
  addTransactionSuccess,
  addTransactionError,
  // deleteTransactionRequest,
  // deleteTransactionSuccess,
  // deleteTransactionError,
  // filterTransactions,
};
