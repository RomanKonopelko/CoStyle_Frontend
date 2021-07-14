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
  getFilterTransactionsStatisticRequest,
  getFilterTransactionsStatisticSuccess,
  getFilterTransactionsStatisticError,
  getTransactionsStatisticRequest,
  getTransactionsStatisticSuccess,
  getTransactionsStatisticError,
} from './transactions-actions';

import { createReducer } from '@reduxjs/toolkit';

const initialState = [];
const initialStatistic = {
  categoriesSummary: 0,
  incomeValue: 0,
  consumptionValue: 0,
};

// const initialFilter = '';

// ========ToolKit =======
const itemsReducers = createReducer(initialState, {
  [getTransactionsSuccess]: (_, { payload }) => payload.transactions,
  [addTransactionSuccess]: (state, { payload }) => [
    payload.transaction,
    ...state,
  ],
  // [deleteTransactionSuccess]: (state, { payload }) =>
  //   state.filter(contact => contact.id !== payload),
});

const itemsReducersStatistic = createReducer(initialStatistic, {
  [getTransactionsStatisticSuccess]: (_, { payload }) => payload,
  [getFilterTransactionsStatisticSuccess]: (_, { payload }) => payload,
});

// const filterReducer = createReducer(initialFilter, {
//   [getFilterTransactionsStatisticSuccess]: (_, { payload }) => payload,
// });

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
  [getFilterTransactionsStatisticRequest]: () => true,
  [getFilterTransactionsStatisticSuccess]: () => false,
  [getFilterTransactionsStatisticError]: () => false,
  [getTransactionsStatisticRequest]: () => true,
  [getTransactionsStatisticSuccess]: () => false,
  [getTransactionsStatisticError]: () => false,
});

const reducers = {
  itemsReducers,
  itemsReducersStatistic,
  // filterReducer,
  loading,
};

export default reducers;
