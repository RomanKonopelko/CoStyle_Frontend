import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import contactReducers from '../redux/contacts/contacts-reducer';
import authReducers from '../redux/auth/auth-reducer';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const contactsReducer = combineReducers({
  items: contactReducers.itemsReducers,
  filter: contactReducers.filterReducer,
  loading: contactReducers.loading,
});

const AuthPersistedReducer = persistReducer(persistConfig, authReducers);

let store = configureStore({
  reducer: {
    auth: AuthPersistedReducer,
    contacts: contactsReducer,
  },
  middleware,
});

let persistor = persistStore(store);

export default { store, persistor };
