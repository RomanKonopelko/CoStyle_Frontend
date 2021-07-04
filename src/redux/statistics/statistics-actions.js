// import { v4 as uuid4 } from 'uuid';
// import actionsTypes from './contacts-types';

import { createAction } from '@reduxjs/toolkit';

// ========ToolKit =======
const getContactsRequest = createAction('contacts/getContactsRequest');
const getContactsSuccess = createAction('contacts/getContactsSuccess');
const getContactsError = createAction('contacts/getContactsError');

const addContactRequest = createAction('contacts/addContactRequest');
const addContactSuccess = createAction('contacts/addContactSuccess');
const addContactError = createAction('contacts/addContactError');

const deleteContactRequest = createAction('contacts/deleteContactRequest');
const deleteContactSuccess = createAction('contacts/deleteContactSuccess');
const deleteContactError = createAction('contacts/deleteContactError');

const filterContacts = createAction('contact/filter');

// ========ToolKit =======

// export const addContact = (name, number) => ({
//   type: actionsTypes.ADDCONTACT,
//   payload: {
//     id: uuid4(),
//     name,
//     number,
//   },
// });

// export const removeContact = id => ({
//   type: actionsTypes.REMOVECONTACT,
//   payload: id,
// });

// export const filterContacts = name => ({
//   type: actionsTypes.CONTACTFILTER,
//   payload: `${name}`,
// });

export {
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
};
