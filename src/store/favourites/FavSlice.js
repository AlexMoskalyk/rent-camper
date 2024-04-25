import { createSlice } from '@reduxjs/toolkit';

const initialState = { favourites: [] };

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addFavourite: (state, { payload }) => {
      state.favourites.push(payload);
    },
    removeFavourite: (state, { payload }) => {
      return {
        ...state,
        favourites: state.favourites.filter(item => item._id !== payload._id),
      };
    },
  },
});

export const { addFavourite, removeFavourite } = favouritesSlice.actions;
export const favouritesReducer = favouritesSlice.reducer;
