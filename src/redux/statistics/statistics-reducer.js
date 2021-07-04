import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  filterContacts,
} from './contacts-actions';

import { createReducer } from '@reduxjs/toolkit';

const initialState = [];

const initialFilter = '';

// ========ToolKit =======
const itemsReducers = createReducer(initialState, {
  [getContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
  [getContactsRequest]: () => true,
  [getContactsSuccess]: () => false,
  [getContactsError]: () => false,
});

const filterReducer = createReducer(initialFilter, {
  [filterContacts]: (_, { payload }) => payload,
});

const reducers = { itemsReducers, filterReducer, loading };

export default reducers;
