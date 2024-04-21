import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import { filterReducer } from './filter/FilterSlice';
import carsReducer from './cars/CarsSlice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter'],
};

const rootReducer = combineReducers({
  filter: filterReducer,
  cars: carsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
