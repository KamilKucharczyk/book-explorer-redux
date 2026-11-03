import { createSlice } from "@reduxjs/toolkit";

const favoritesInitialState = [];

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: favoritesInitialState,
  reducers: {
    addFavorite: (state, action) => {
      const addedBook = state.some((book) => book.key === action.payload.key);
      if (!addedBook) {
        state.push(action.payload);
      }
    },
    removeFavorite: (state, action) => {
      return state.filter((item) => item.key !== action.payload);
    },
    clearFavorites: () => {
      return [];
    },
  },
});

export const { addFavorite, removeFavorite, clearFavorites } =
  favoritesSlice.actions;
export default favoritesSlice.reducer;
