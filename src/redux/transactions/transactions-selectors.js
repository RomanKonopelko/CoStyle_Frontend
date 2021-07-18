// import { createSelector } from 'reselect';

const getAllTransactions = state => {
  return state.transactions.items;
};
// const getFilterValue = state => state.transactions.filter;

// const getSearchedContacts = createSelector(
//   [getAllTransactions, getFilterValue],
//   (items, filter) => {
//     return items.filter(({ name }) => {
//       return name.toLowerCase().includes(filter.toLowerCase());
//     });
//   },
// );

const getTransactionsStatistic = state => {
  // console.log(`state`, state);
  return state.transactions.statistic;
};

const getLoading = state => {
  return state.transactions.loading;
};

export {
  getAllTransactions,
  getLoading,
  // getFilterValue,
  // getSearchedContacts
  getTransactionsStatistic,
};
