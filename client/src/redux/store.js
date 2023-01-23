
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger'
import { reducers } from './reducers';
import storage from 'redux-persist/lib/storage'
import persistReducer from 'redux-persist/es/persistReducer';

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducers=persistReducer(persistConfig, reducers)

export const store=configureStore({
  reducer:persistedReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});