import { createSlice } from '@reduxjs/toolkit';

const initialState = { favourites: [] };

const favouritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavourite: (state, { payload }) => {
      state.favourites.push(payload);
    },
    removeFavourite: (state, { payload }) => {
      return {
        ...state,
        favourites: state.favourites.filter(
          favouriteID => favouriteID !== payload
        ),
      };
    },
  },
});

export const { addFavourite, removeFavourite } = favouritesSlice.actions;
export const favouritesReducer = favouritesSlice.reducer;
