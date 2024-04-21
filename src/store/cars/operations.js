import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllCars } from '../../api/Api';

export const fetchCars = createAsyncThunk(
  'cars/fetchCars',
  async ({ page = 1, limit = 4 }, thunkAPI) => {
    try {
      const data = await fetchAllCars(page, limit);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCarById = createAsyncThunk(
  'cars/fetchCarById',
  async (id, thunkAPI) => {
    try {
      const data = await fetchCarById(id);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
