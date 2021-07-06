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
  // filterTransactions,
} from './statistics-actions';

import { createReducer } from '@reduxjs/toolkit';

const initialState = [];

// const initialFilter = '';

// ========ToolKit =======
const itemsReducers = createReducer(initialState, {
  [getTransactionsSuccess]: (_, { payload }) => payload,
  [addTransactionSuccess]: (state, { payload }) => [...state, payload],
  // [deleteTransactionSuccess]: (state, { payload }) =>
  //   state.filter(contact => contact.id !== payload),
});

const loading = createReducer(false, {
  [getTransactionsRequest]: () => true,
  [getTransactionsSuccess]: () => false,
  [getTransactionsError]: () => false,
  [addTransactionRequest]: () => true,
  [addTransactionSuccess]: () => false,
  [addTransactionError]: () => false,
  // [deleteTransactionRequest]: () => true,
  // [deleteTransactionSuccess]: () => false,
  // [deleteTransactionError]: () => false,
});

// const filterReducer = createReducer(initialFilter, {
//   [filterTransactions]: (_, { payload }) => payload,
// });

const reducers = {
  itemsReducers,
  // filterReducer,
  loading,
};

export default reducers;
