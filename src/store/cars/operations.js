import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllCars } from 'api/Api';

export const getCars = createAsyncThunk(
  'cars/getCars',
  async (page, thunkAPI) => {
    try {
      const data = await fetchAllCars(page);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
