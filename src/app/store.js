import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import favoritesReducer from "../features/favorites/favoritesSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    favorites: favoritesReducer,
  },
});
