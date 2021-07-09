// import { createSelector } from 'reselect';

const getAllTransactions = state => {
  return state.transactions.items;
};
const getFilterValue = state => state.transactions.filter;

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
  return state.transactions.itemsStatistic;
};

export {
  getAllTransactions,
  getFilterValue,
  // getSearchedContacts
  getTransactionsStatistic,
};
