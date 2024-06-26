import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { favouritesReducer } from './favourites/FavSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import carsReducer from './cars/CarsSlice';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const favouritesPersistConfig = {
  key: 'favourites',
  storage,
};

const persistedFavouritesReducer = persistReducer(
  favouritesPersistConfig,
  favouritesReducer
);

const rootReducer = combineReducers({
  cars: carsReducer,
  favourites: persistedFavouritesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
