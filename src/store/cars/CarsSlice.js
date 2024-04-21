import { createSlice } from '@reduxjs/toolkit';
import {
  handleFullfieldCarById,
  handleFullfieldCars,
  handlePending,
  handleRejected,
} from './handlers';
import { fetchCarById, fetchCars } from './operations';

const initialState = {
  cars: [],
  car: null,
  isLoading: false,
  error: null,
};

export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchCars.fulfilled, handleFullfieldCars)
      .addCase(fetchCarById.fulfilled, handleFullfieldCarById)
      .addMatcher(action => action.type.endsWith('pending'), handlePending)
      .addMatcher(action => action.type.endsWith('rejected'), handleRejected);
  },
});

export default carsSlice.reducer;
