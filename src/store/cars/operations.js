import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api/Api';

export const fetchCars = createAsyncThunk(
  'cars/fetchCars',
  async ({ page = 1, limit = 4 }, thunkAPI) => {
    try {
      const { data } = await api.get('/', {
        params: {
          page,
          limit,
        },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchCarById = createAsyncThunk(
  'cars/fetchCarById',
  async (id, thunkAPI) => {
    try {
      const { data } = await api.get(`/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
