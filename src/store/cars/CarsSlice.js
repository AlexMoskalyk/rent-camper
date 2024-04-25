import { createSlice } from '@reduxjs/toolkit';
import { getCars } from './operations';
import {
  pendingReducer,
  rejectedReducer,
  handleFulfielldCars,
} from './handlers.js';

const initialState = {
  items: [],
  item: null,
  isLoading: false,
  error: null,
  totalCount: 0,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(getCars.fulfilled, handleFulfielldCars)
      .addMatcher(action => action.type.endsWith('/pending'), pendingReducer)
      .addMatcher(action => action.type.endsWith('/rejected'), rejectedReducer);
  },
});

export default carsSlice.reducer;
