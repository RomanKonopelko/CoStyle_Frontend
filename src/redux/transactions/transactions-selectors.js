// import { createSelector } from 'reselect';

const getAllTransactions = state => {
  return state.transactions.items;
};
// const getFilterValue = state => state.contacts.filter;

// const getSearchedContacts = createSelector(
//   [getAllTransactions, getFilterValue],
//   (items, filter) => {
//     return items.filter(({ name }) => {
//       return name.toLowerCase().includes(filter.toLowerCase());
//     });
//   },
// );

export {
  getAllTransactions,
  // getFilterValue,
  // getSearchedContacts
};