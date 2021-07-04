import { createSelector } from 'reselect';

const getAllContacts = state => state.contacts.items;

const getFilterValue = state => state.contacts.filter;

const getSearchedContacts = createSelector(
  [getAllContacts, getFilterValue],
  (items, filter) => {
    return items.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase());
    });
  },
);

export { getAllContacts, getFilterValue, getSearchedContacts };
